---
title: "Works in Progress"
permalink: /experimental-articles/
author_profile: true
redirect_from:
  - /working-paper/
---

이 페이지에는 학기 중에 작성한 글 가운데, 이후에 수정하고 확장해 보고 있는 원고들을 모아 둡니다.

This page collects papers I wrote during the semester and am now revising and developing further.

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
    <p>No works in progress posted yet.</p>
  {% endif %}
</section>
