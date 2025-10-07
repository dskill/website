# Project Overview
- Static site built with Jekyll (custom layout, no parent theme).  
- GitHub Pages deployment from `main` branch of `dskill/website`.  
- Ruby managed via `rbenv`; use Ruby 3.1.4 and Bundler for all commands (`bundle exec …`).  
- Assets (images/GIFs) live under `assets/images/`; homepage data driven by `_data/portfolio.yml`.

# Recent Work
- Recreated the Squarespace-style homepage (`index.html`) with custom layout (`_layouts/default.html`) and CSS (`assets/css/main.css`).  
- Downloaded key project imagery from the legacy site and referenced locally.  
- Navigation currently links out to legacy Squarespace sections for pages that do not exist yet.
- Introduced an `_experiences` collection with a new layout and migrated the Slimeball! entry as the first test page.
- Added a Tilt Brush experience entry with identical copy, local assets, and an embedded YouTube trailer.
- Simplified the experience layout so content authors can arrange videos, images, and copy manually while reusing the existing CSS utility classes.
- Styled Markdown image syntax so project content can stay in plain Markdown without extra HTML.
- Removed the old link pill UI; experiences now just use standard Markdown content.

# Next Steps
1. **Collections**: migrate the remaining Experiences into `_experiences/` entries (repeat the Slimeball! structure) and, if needed, introduce `_devlog/` and `_talks/` collections. Update the homepage grid to read from the collection once content coverage is complete.  
2. **Interior Pages**: add dedicated `about.md`, collection index pages, and detail templates. Mirror existing Squarespace structure but keep content concise and Markdown-friendly.  
3. **Design Polish**: extend current CSS to handle text-heavy pages, responsive typography, and potential light/dark variants. Consider reusable components/partials for hero sections, galleries, etc.  
4. **Image Management**: normalize filenames, document sources, and ensure compression where possible. Consider automating srcset generation or using Jekyll plugins if needed (verify GitHub Pages compatibility).  
5. **Content Migration**: manual recreation preferred over importing the Squarespace WordPress XML (export lacks clean media references and introduces heavy inline HTML). Use export only as reference copy.  
6. **SEO & Metadata**: add meaningful descriptions and social cards per page. Update `_config.yml` `url` once final domain is set.  
7. **Testing**: rely on `bundle exec jekyll serve --livereload` for local preview. Add CI (e.g., GitHub Actions) to run `bundle exec jekyll build` if workflow grows.

# Gotchas
- Git needs Ruby 3.1.4 active; avoid mixing with system Ruby (2.6) to prevent Bundler errors.  
- GitHub Pages supports only whitelisted plugins; stick to `jekyll-feed`, `jekyll-seo-tag`, and other approved gems unless deploying via GitHub Actions.  
- Maintain ASCII filenames; spaces in image names came from Squarespace—rename if automating pipelines later.  
- Large GIFs may impact load time; consider MP4/WebM alternatives if performance becomes an issue.
- Project site deploys at `/website`; Jekyll baseurl is set to `/website`, so run `bundle exec jekyll serve --livereload --baseurl ""` for root-local testing.
- When recreating experience pages, capture all source media locally and keep the copy identical to the original page text (no paraphrasing).

# Squarespace Scraping Workflow
- Create/update a Python virtualenv (`python3 -m venv .venv && source .venv/bin/activate`) and install Playwright (`pip install playwright && playwright install chromium`).  
- Mirror the legacy site as needed with `wget --continue --mirror --convert-links --adjust-extension --page-requisites --span-hosts --no-parent --restrict-file-names=ascii --content-disposition --domains=blog.drewskillman.com,images.squarespace-cdn.com,static1.squarespace.com,assets.squarespace.com --directory-prefix=reference/mirror https://blog.drewskillman.com/`.  
- Use Playwright scripts to fetch rendered HTML or inspect DOM content when Squarespace hides data behind JS. Example:
  ```python
  import asyncio
  from pathlib import Path
  from playwright.async_api import async_playwright
  
  async def grab(url, outfile):
      async with async_playwright() as p:
          browser = await p.chromium.launch()
          page = await browser.new_page()
          await page.goto(url, wait_until="networkidle")
          await page.wait_for_timeout(2000)
          Path(outfile).write_text(await page.content())
          await browser.close()
  
  asyncio.run(grab(
      "https://blog.drewskillman.com/experiences/skillman-hackett-prototypes-7rjfj",
      "reference/skillman-hackett-playwright.html",
  ))
  ```
- Capture each Squarespace page by saving the rendered HTML as `reference/<slug>-playwright.html`, then parse that file with BeautifulSoup to pull text blocks and locate media URLs before wiring up `_experiences/<slug>.md`.
- When downloading media, prefer the `static1.squarespace.com` URLs if the `images.squarespace-cdn.com` version 404s; both domains host the same asset but older uploads often live on `static1`.
- Copy required media into `assets/images/<slug>/` before wiring up the new `_experiences` entry.

# Next Task
- Migrate the "Skillman & Hackett Prototypes" Squarespace entry into `_experiences/` with identical copy, local assets, and any embedded media so the homepage card can link internally.
