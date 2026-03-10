---
title: "Experimental Articles"
permalink: /experimental-articles/
author_profile: true
---

This page collects term papers I wrote during the semester and am now revising and developing further.

This page will be updated as revised files are added over time.

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
    <p>No experimental articles posted yet.</p>
  {% endif %}
</section>
