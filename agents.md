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

# Dev Log Migration Checklist
- **Status overview:** 55 of 55 entries migrated (including layout/index work in progress).
- **Next actions:** continue replacing stubs with full copy/media, pulling assets into `assets/images/devlog/<slug>/`, and updating this tracker as we go.

## Completed Entries
- [x] \"Dead Balls\" is on the app store! (`dead-balls-is-on-the-app-store`)
- [x] \"Super I Am 8 Bit\" Gallery Exhibition (`super-i-am-8-bit-gallery-exhibition`)
- [x] Ahhh... Gamma.  You crafty bastard. (`ahhh-gamma-you-crafty-bastard`)
- [x] Area Lights (`area-lights`)
- [x] Audio Driven Particles (`audio-driven-particles`)
- [x] Autonomous (`autonomous`)
- [x] Brutal Legend VFX Reel (`brutal-legend-vfx-reel`)
- [x] City Visualizer HMD + Leap (`city-visualizer-hmd-leap`)
- [x] Climate Variation in Brutal Legend (`climate-variation-in-brutal-legend`)
- [x] Concepts from Iron Brigade (Trenched) (`concepts-from-iron-brigade-trenched`)
- [x] Concepts from Stacking (`concepts-from-stacking`)
- [x] Curl Noise Particles (`curl-noise-particles`)
- [x] Curved Relief Mapping in 3ds Max (`curved-relief-mapping-in-3ds-max`)
- [x] Direct X 11 + Unity (`direct-x-11-unity`)
- [x] Disaster Simulation (`disaster-simulation`)
- [x] Experiments in Processing - Fire (`experiments-in-processing-fire`)
- [x] Fluid Driven Voxels (`fluid-driven-voxels`)
- [x] Fly Eye iPhone App (`fly-eye-iphone-app`)
- [x] Galaxy Formation (`galaxy-formation`)
- [x] Generative Art Experiments (`generative-art-experiments`)
- [x] Grass Shader in 3ds Max (`grass-shader-in-3ds-max`)
- [x] In the Studio (`in-the-studio`)
- [x] Ink Rendering in Brutal Legend (`ink-rendering-in-brutal-legend`)
- [x] Kinect + Spring Physics (`kinect-spring-physics`)
- [x] Kinect motion blobs with Cloth Simulation (`kinect-motion-blobs-with-cloth-simulation`)
- [x] Kinect V2 | Oculus | Depth Mirror (`kinect-v2-oculus-depth-mirror`)
- [x] Kinect V2 | Oculus | Point Cloud Interactions and Energy Discs (`kinect-v2-oculus-point-cloud-interactions-and-energy-discs`)
- [x] Kinect2 | Oculus | Depth Mirror | Particles (`kinect2-oculus-depth-mirror-particles`)
- [x] Leap Prototype: The King's Hand (`leap-prototype-the-king-s-hand`)
- [x] Little Pink Best Buds (`little-pink-best-buds`)
- [x] Martian Telemetry Rendering (`martian-telemetry-rendering`)
- [x] Maya PDC (Particle Disk Cache) exporter (`maya-pdc-particle-disk-cache-exporter`)
- [x] Meeting sketch by Lee Petty (`meeting-sketch-by-lee-petty`)
- [x] MoveNet Pose Model Launched (`movenet-pose-model-launched`)
- [x] Music Reactive Brushes (`music-reactive-brushes`)
- [x] Normal Mode Analysis of the Clathrin Cage and other Semi-Rigid Systems (`normal-mode-analysis-of-the-clathrin-cage-and-other-semi-rigid-systems`)
- [x] Oculus | Kinect V2 | Audio Visualizer Test (`oculus-kinect-v2-audio-visualizer-test`)
- [x] Physics Driven Fur Shader in 3ds Max (`physics-driven-fur-shader-in-3ds-max`)
- [x] Plasma Ball HMD + Leap (`plasma-ball-hmd-leap`)
- [x] Rapid Prototyping (2013) (`rapid-prototyping-2013`)
- [x] Real-Time VFX in your Living Room (`real-time-vfx-in-your-living-room`)
- [x] Relief Map Blending (`relief-map-blending`)
- [x] Rock Show VFX in Brutal Legend (2010) (`rock-show-vfx-in-brutal-legend-2010`)
- [x] Shooting Gallery | Leap Motion Prototype (`shooting-gallery-leap-motion-prototype`)
- [x] Spaceship of the Imagination : Earth Day Remix (`spaceship-of-the-imagination-earth-day-remix`)
- [x] Stacking (`stacking`)
- [x] The Rise of Real Time (2017) (`the-rise-of-real-time-2017`)
- [x] Tilt Brush (`tilt-brush`)
- [x] Tilt Brush by Accident (2021) (`tilt-brush-by-accident-2021`)
- [x] Time Lapse Climates in Brutal Legend (`time-lapse-climates-in-brutal-legend`)
- [x] UV Displacement Particles (`uv-displacement-particles`)
- [x] Visual Effects Artist Roundtable at GDC 2013 (`visual-effects-artist-roundtable-at-gdc-2013`)
- [x] Visual Effects Artist Roundtables (2012-2019) (`visual-effects-artist-roundtables-2012-2019`)
- [x] We've been acquired by Google! (`we-ve-been-acquired-by-google`)
- [x] Weightless (`weightless`)

## Remaining Entries
- [ ] (none – all migrated)

# Squarespace Scraping Workflow
- Fetch metadata with curl: `curl -sS "https://blog.drewskillman.com/experiences/<slug>?format=json-pretty" -o reference/<slug>.json`. The response reliably includes titles, asset IDs, and pagination, but note that Squarespace leaves `item.body` empty for these legacy portfolio entries.
- Grab the rendered HTML directly: `curl -sS "https://blog.drewskillman.com/experiences/<slug>" -o reference/<slug>.html`. This returns the full page markup without needing Playwright and has been the most dependable source for copy and gallery blocks.
- Parse the saved HTML (manually or with a quick script) to extract text blocks and image URLs. All content we have migrated so far came from this HTML snapshot.
- Download media from the CDN using the `images.squarespace-cdn.com` URL captured in the HTML. If a request 404s, retry with the matching `static1.squarespace.com` path; both domains host the same assets.
- Store downloaded files under `assets/images/<slug>/` (or alongside other shared assets) before creating the `_experiences/<slug>.md` entry.
- Only fall back to Playwright if a page depends on client-side rendering (none of the current Experiences do). If you need it, reactivate the virtualenv in `.venv`, reinstall browsers with `playwright install`, and reuse the script in `reference/` as a last resort.

# Progress Tracker
- **Experiences migrated (`_experiences/`):** `slimeball`, `tilt-brush`, `movenet-fluids`, `skillman-hackett-prototypes`, `dropchord`, `my-alien-buddy`, `playground`, `kinect-party`. Homepage cards for these now point to internal pages.
- **Experiences still external:** `brutal-legend`, `stacking`, `trenched` (AKA Iron Brigade), `avfx-1-wip`. They remain linked out in `_data/portfolio.yml` and need local copies plus assets.
- **Interior pages outstanding:** `about`, collection landing pages for experiences/devlog/talks, individual dev log posts, and talks archive entries. Mirror the Squarespace content once the experience set is complete.

# Next Task
- Migrate the "Skillman & Hackett Prototypes" Squarespace entry into `_experiences/` with identical copy, local assets, and any embedded media so the homepage card can link internally.
