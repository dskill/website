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
    <article class="devlog-card{% if post.thumbnail or post.thumbnail_video %} devlog-card--media{% endif %}">
      <a class="devlog-card-link" href="{{ post.url | relative_url }}">
        {% if post.thumbnail or post.thumbnail_video %}
        <div class="devlog-card-figure">
          {% if post.thumbnail %}
          <div
            class="devlog-card-figure-image"
            style="background-image: url('{{ post.thumbnail | relative_url }}');"
            aria-hidden="true"
          ></div>
          {% elsif post.thumbnail_video %}
          <div class="devlog-card-figure-video">
            <iframe
              src="{{ post.thumbnail_video }}"
              title="{{ post.title }} teaser"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          {% endif %}
          <div class="devlog-card-overlay">
            <div class="devlog-card-meta">
              <time class="devlog-card-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
              <h2 class="devlog-card-title">{{ post.title }}</h2>
            </div>
          </div>
        </div>
        {% else %}
        <div class="devlog-card-body">
          <time class="devlog-card-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
          <h2 class="devlog-card-title">{{ post.title }}</h2>
          {% if post.summary %}
          <p class="devlog-card-summary">{{ post.summary }}</p>
          {% else %}
          <p class="devlog-card-summary">{{ post.excerpt | strip_html | truncate: 140 }}</p>
          {% endif %}
        </div>
        {% endif %}
      </a>
    </article>
    {% endfor %}
  </div>
</section>
