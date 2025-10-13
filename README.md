# TODO

- Long-term (recommended): Stop using the legacy server entirely, and point the apex at GitHub Pages:
  - In cPanel Zone Editor, delete the A record `drewskillman.com → 216.37.42.226`.
  - Add GitHub’s four A records for the apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
  - Point `www` directly to GitHub with a CNAME to `dskill.github.io.` if it isn’t already.
  - In GitHub Pages settings, add `drewskillman.com` as a custom domain (it can coexist with `projects.drewskillman.com` if you want both). GitHub will provision the HTTPS cert and write/expect a `CNAME` file with the hostname.
  - Optionally, use a simple `_redirects` page or Jekyll’s `jekyll-redirect-from` plugin to send `drewskillman.com` visitors to `projects.drewskillman.com`, if that’s your preferred canonical domain.

## Overview

This repository contains the in-progress rebuild of the Drew Skillman portfolio site. It is a custom Jekyll project (no parent theme) that targets GitHub Pages and serves from `projects.drewskillman.com`.

## Requirements

- Ruby 3.1.4 via `rbenv` (the repo assumes shims are available on PATH).
- Bundler (`gem install bundler` after installing Ruby).

## Setup

1. Install dependencies: `bundle install`
2. Optionally verify the build without serving: `bundle exec jekyll build`

## Development

- Start a live-reload server with the convenience script (preferred because it bootstraps `rbenv` and sets the correct base URL):

  ```bash
  ./scripts/live-serve.sh
  ```

  The script listens on `http://127.0.0.1:4000` with livereload enabled.

- If you need to run the server manually, use `bundle exec jekyll serve --livereload --baseurl ""`.

## Deployment

GitHub Pages builds `main` automatically. Commit any changes (including the `CNAME` file) and push to publish.
