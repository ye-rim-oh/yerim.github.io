---
title: "Working Paper"
permalink: /working-paper/
author_profile: true
---

<aside class="work-note">
  <strong>Disclosure</strong>
  <p>Research ideas, questions, and study design are mine.</p>
  <p>AI assistance, when used, is limited to coding, implementation, and workflow automation unless a paper notes otherwise.</p>
</aside>

This page collects in-progress projects, early research notes, and working papers that are not yet in final publication form.

Some entries may remain short while a project is still being scoped. When a paper grows into a fuller draft, I will expand the write-up here.

{% assign papers = site.working_papers | sort: "date" | reverse %}
<section class="working-paper-list">
  {% if papers.size > 0 %}
    {% for paper in papers %}
      <article>
        <h2><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h2>
        <div class="working-paper-meta">
          {% if paper.date %}{{ paper.date | date: "%Y-%m-%d" }}{% endif %}
          {% if paper.status %} | {{ paper.status }}{% endif %}
        </div>
        {% if paper.summary %}
          <p>{{ paper.summary }}</p>
        {% elsif paper.excerpt %}
          <p>{{ paper.excerpt | strip_html | truncate: 220 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  {% else %}
    <p>No working papers posted yet.</p>
  {% endif %}
</section>
