---
layout: default
title: "Dev Log"
permalink: /devlog/
---

<section class="devlog-index container">
  <header class="devlog-index-header">
    <h1>Dev Log</h1>
    <p class="devlog-index-description">
      Personal notes, prototypes, and behind-the-scenes explorations. Entries are being rebuilt from the legacy site—media will come online as each post is migrated.
    </p>
  </header>

  <div class="devlog-list">
    {% assign posts = site.devlog | sort: 'date' | reverse %}
    {% for post in posts %}
    <article class="devlog-card">
      <a href="{{ post.url | relative_url }}">
        <time class="devlog-card-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
        <h2 class="devlog-card-title">{{ post.title }}</h2>
        {% if post.summary %}
        <p class="devlog-card-summary">{{ post.summary }}</p>
        {% else %}
        <p class="devlog-card-summary">{{ post.excerpt | strip_html | truncate: 140 }}</p>
        {% endif %}
      </a>
    </article>
    {% endfor %}
  </div>
</section>

