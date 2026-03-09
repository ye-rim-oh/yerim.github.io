const json = (body, status = 200) =>
  new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const html = (body, status = 200) =>
  new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const text = (body, status = 200) =>
  new Response(body, {
    status,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });

function getCookie(request, name) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";").map((part) => part.trim());
  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split("=");
    if (key === name) return rest.join("=");
  }

  return null;
}

function setStateCookie(state) {
  return [
    `decap_oauth_state=${state}`,
    "HttpOnly",
    "Path=/",
    "SameSite=Lax",
    "Secure",
    "Max-Age=900",
  ].join("; ");
}

function clearStateCookie() {
  return [
    "decap_oauth_state=",
    "HttpOnly",
    "Path=/",
    "SameSite=Lax",
    "Secure",
    "Max-Age=0",
  ].join("; ");
}

function randomState() {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function makeCallbackHtml(payload) {
  const serialized = JSON.stringify(payload);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Decap CMS Authorization</title>
  </head>
  <body>
    <script>
      (function() {
        var payload = ${serialized};

        function sendMessage(event) {
          var origin = event && event.origin ? event.origin : "*";
          window.opener.postMessage(
            "authorization:github:success:" + JSON.stringify(payload),
            origin
          );
          window.removeEventListener("message", sendMessage, false);
          window.close();
        }

        window.addEventListener("message", sendMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;
}

async function exchangeCodeForToken(code, env, redirectUri) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "user-agent": "ye-rim-oh-decap-oauth",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub token exchange failed with ${response.status}`);
  }

  const payload = await response.json();

  if (payload.error) {
    throw new Error(payload.error_description || payload.error);
  }

  if (!payload.access_token) {
    throw new Error("GitHub did not return an access token");
  }

  return payload.access_token;
}

function validateEnv(env) {
  const missing = [];
  for (const key of ["GITHUB_CLIENT_ID", "GITHUB_CLIENT_SECRET", "SITE_URL"]) {
    if (!env[key]) missing.push(key);
  }
  return missing;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const missing = validateEnv(env);

    if (missing.length > 0) {
      return json(
        {
          ok: false,
          error: `Missing required environment variables: ${missing.join(", ")}`,
        },
        500
      );
    }

    if (request.method !== "GET") {
      return text("Method not allowed", 405);
    }

    if (url.pathname === "/") {
      return json({
        ok: true,
        service: "decap-github-oauth-proxy",
        site_url: env.SITE_URL,
        repo: env.GITHUB_REPO || null,
        branch: env.GITHUB_BRANCH || null,
      });
    }

    if (url.pathname === "/auth") {
      const state = randomState();
      const redirectUri = `${url.origin}/callback`;
      const scopes = env.OAUTH_SCOPES || "public_repo";
      const githubUrl = new URL("https://github.com/login/oauth/authorize");

      githubUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      githubUrl.searchParams.set("redirect_uri", redirectUri);
      githubUrl.searchParams.set("scope", scopes);
      githubUrl.searchParams.set("state", state);

      return new Response(null, {
        status: 302,
        headers: {
          location: githubUrl.toString(),
          "set-cookie": setStateCookie(state),
        },
      });
    }

    if (url.pathname === "/callback") {
      const state = url.searchParams.get("state");
      const code = url.searchParams.get("code");
      const savedState = getCookie(request, "decap_oauth_state");

      if (!state || !savedState || state !== savedState) {
        const response = text("State validation failed. Retry login from /admin.", 400);
        response.headers.set("set-cookie", clearStateCookie());
        return response;
      }

      if (!code) {
        const response = text("Missing OAuth code from GitHub.", 400);
        response.headers.set("set-cookie", clearStateCookie());
        return response;
      }

      try {
        const redirectUri = `${url.origin}/callback`;
        const token = await exchangeCodeForToken(code, env, redirectUri);
        const response = html(makeCallbackHtml({ token, provider: "github" }));
        response.headers.set("set-cookie", clearStateCookie());
        return response;
      } catch (error) {
        const response = text(`OAuth exchange failed: ${error.message}`, 500);
        response.headers.set("set-cookie", clearStateCookie());
        return response;
      }
    }

    return text("Not found", 404);
  },
};
