# Project Overview
- Static site built with Jekyll (custom layout, no parent theme).  
- GitHub Pages deployment from `main` branch of `dskill/website`.  
- Ruby managed via `rbenv`; use Ruby 3.1.4 and Bundler for all commands (`bundle exec …`).  
- Assets (images/GIFs) live under `assets/images/`; homepage data driven by `_data/portfolio.yml`.

# Recent Work
- Day-to-day work is now adding new dev log entries for current projects (photobooth, outlet cover, ski game, voice tools) rather than migrating old content.
- Site structure is settled: About page, Talks index, and a reusable card layout with media previews across all collections.
- Added `llms.txt` and a companion page for LLM/agent visitors.

# Devlog Entry Conventions

## Frontmatter Fields
```yaml
---
title: "Entry Title"
date: 2025-12-15
source_slug: entry-slug
source_link: /devlog/entry-slug
thumbnail: /assets/images/devlog/entry-slug/image.png  # Shows on devlog index
thumbnail_video: https://player.vimeo.com/video/12345  # Alternative: video thumbnail
---
```

## Image Storage
- Store images locally at `assets/images/devlog/<slug>/`
- Prefer local images over external URLs (GitHub raw links, CDNs) for reliability
- Download images from source repos when file size is reasonable
- To fetch from GitHub repos: `curl -sL -H "Accept: application/vnd.github.v3.raw" "https://api.github.com/repos/<owner>/<repo>/contents/<path>" -o <filename>`

## Image Display
- Single image: `![Alt text](/assets/images/devlog/slug/image.png)`
- Horizontal grid:
```html
<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/assets/images/devlog/slug/img1.png" alt="Description" style="flex: 1; max-width: 33%;">
  <img src="/assets/images/devlog/slug/img2.png" alt="Description" style="flex: 1; max-width: 33%;">
</div>
```
- With Jekyll relative_url: `{{ '/assets/images/devlog/slug/image.png' | relative_url }}`

# Gotchas
- Ruby 3.1.4 via rbenv is required. The shell may default to system Ruby 2.6, causing Bundler errors. Always prefix commands with `eval "$(rbenv init -)" &&` to ensure the correct version. Example: `eval "$(rbenv init -)" && bundle exec jekyll serve --livereload --baseurl ""`
- GitHub Pages supports only whitelisted plugins; stick to `jekyll-feed`, `jekyll-seo-tag`, and other approved gems unless deploying via GitHub Actions.
- Maintain ASCII filenames; spaces in image names came from Squarespace—rename if automating pipelines later.
- Large GIFs may impact load time; consider MP4/WebM alternatives if performance becomes an issue.
- Project site deploys at `/website`; Jekyll baseurl is set to `/website`, so run `bundle exec jekyll serve --livereload --baseurl ""` for root-local testing.
- When recreating experience pages, capture all source media locally and keep the copy identical to the original page text (no paraphrasing).

# Content Archive
- The Squarespace migration is complete: all dev log entries, talks, and experiences live in `_devlog/`, `_talks/`, and `_experiences/`. Nothing on the homepage links out to `blog.drewskillman.com` anymore.
- Raw HTML/JSON snapshots of the old Squarespace pages are kept in `reference/` in case original copy needs to be checked. To re-fetch a page: `curl -sS "https://blog.drewskillman.com/<collection>/<slug>" -o reference/<slug>.html` (the rendered HTML is more reliable than `?format=json-pretty`, which leaves `item.body` empty for legacy entries).
- Media came from `images.squarespace-cdn.com`; if a URL 404s, retry the matching `static1.squarespace.com` path.
