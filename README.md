# TODO

- Long-term (recommended): Stop using the legacy server entirely, and point the apex at GitHub Pages:
  - In cPanel Zone Editor, delete the A record `drewskillman.com → 216.37.42.226`.
  - Add GitHub’s four A records for the apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
  - Point `www` directly to GitHub with a CNAME to `dskill.github.io.` if it isn’t already.
  - In GitHub Pages settings, add `drewskillman.com` as a custom domain (it can coexist with `projects.drewskillman.com` if you want both). GitHub will provision the HTTPS cert and write/expect a `CNAME` file with the hostname.
  - Optionally, use a simple `_redirects` page or Jekyll’s `jekyll-redirect-from` plugin to send `drewskillman.com` visitors to `projects.drewskillman.com`, if that’s your preferred canonical domain.

# GitHub Pages Site

This repository hosts a GitHub Pages-powered site. It currently includes a simple placeholder page so you can verify the publishing workflow end-to-end.

## Local development

1. Ensure you have Ruby (>= 3.0) and Bundler installed (`gem install bundler` if you need it).
2. Install dependencies: `bundle install`
3. Serve locally using the GitHub Pages configuration (override the baseurl so the site is served from the root in development):

   ```bash
   bundle exec jekyll serve --livereload --baseurl ""
   ```

4. Visit `http://localhost:4000` in your browser to confirm the site renders.

GitHub Pages will build this site using the same configuration, so what you see locally should match production.

If you only need to verify that the site compiles without starting the server, run `bundle exec jekyll build` to perform a quick build check.
