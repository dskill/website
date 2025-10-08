---
layout: default
title: "Talks"
permalink: /talks/
---

<section class="devlog-index container">
  <header class="devlog-index-header">
    <h1>Talks</h1>
    <p class="devlog-index-description">
      Conference sessions, roundtables, and guest lectures.
    </p>
  </header>

  <div class="devlog-list">
    {% assign talks = site.talks | sort: 'date' | reverse %}
    {% for talk in talks %}
    <article class="devlog-card{% if talk.thumbnail or talk.thumbnail_video %} devlog-card--media{% endif %}">
      <a class="devlog-card-link" href="{{ talk.url | relative_url }}">
        {% if talk.thumbnail or talk.thumbnail_video %}
        <div class="devlog-card-figure">
          {% if talk.thumbnail %}
          <div
            class="devlog-card-figure-image"
            style="background-image: url('{{ talk.thumbnail | relative_url }}');"
            aria-hidden="true"
          ></div>
          {% elsif talk.thumbnail_video %}
          <div class="devlog-card-figure-video">
            <iframe
              src="{{ talk.thumbnail_video }}"
              title="{{ talk.title }} teaser"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          {% endif %}
          <div class="devlog-card-overlay">
            <div class="devlog-card-meta">
              <time class="devlog-card-date" datetime="{{ talk.date | date_to_xmlschema }}">{{ talk.date | date: "%B %-d, %Y" }}</time>
              <h2 class="devlog-card-title">{{ talk.title }}</h2>
            </div>
          </div>
        </div>
        {% else %}
        <div class="devlog-card-body">
          <time class="devlog-card-date" datetime="{{ talk.date | date_to_xmlschema }}">{{ talk.date | date: "%B %-d, %Y" }}</time>
          <h2 class="devlog-card-title">{{ talk.title }}</h2>
          {% if talk.summary %}
          <p class="devlog-card-summary">{{ talk.summary }}</p>
          {% else %}
          <p class="devlog-card-summary">{{ talk.excerpt | strip_html | truncate: 140 }}</p>
          {% endif %}
        </div>
        {% endif %}
      </a>
    </article>
    {% endfor %}
  </div>
</section>
