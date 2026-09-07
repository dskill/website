---
title: "Natural Language -> 3D Printed Outlet Cover"
date: 2026-07-30
source_slug: printing-a-replacement-outlet-cover
source_link: /devlog/printing-a-replacement-outlet-cover
thumbnail: /assets/images/devlog/printing-a-replacement-outlet-cover/installed-outlet-cover.jpg
---

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
  <figure style="margin: 0;">
    <img src="{{ '/assets/images/devlog/printing-a-replacement-outlet-cover/broken-cover.jpg' | relative_url }}" alt="The original broken outlet cover" style="aspect-ratio: 4 / 3; object-fit: cover; object-position: center 28%; width: 100%;">
    <figcaption>The broken original</figcaption>
  </figure>
  <figure style="margin: 0;">
    <img src="{{ '/assets/images/devlog/printing-a-replacement-outlet-cover/installed-outlet-cover.jpg' | relative_url }}" alt="The blue 3D-printed replacement outlet cover installed on the metal box" style="aspect-ratio: 4 / 3; object-fit: cover; object-position: center 35%; width: 100%;">
    <figcaption>The installed 3D-printed replacement</figcaption>
  </figure>
</div>

Some outlets in my garage had outlet covers too wide, and i managed to break them walking by.  This ended up being a great opportunity to test CAD AI agent skills (this was using Opus 5).  I described what i wanted in natural langauge, and ended up with an STL that I could 3D print.  Originally, I tried to get my LLM directly connected to my bambu 3D printer and sending raw gcode, and while it was technically possible I found slicing via CLI to be unnecessarily complicated.  If I can get the STL, that's 90% of the work and I can slice it and print it myself.  

<img src="{{ '/assets/images/devlog/printing-a-replacement-outlet-cover/installed-switch-cover.jpg' | relative_url }}" alt="A second blue 3D-printed cover installed around two wall switches" style="max-width: 500px; width: 100%;">
*A second finished cover for the adjacent switches*

## Real world context

Just photographing calipers in context gives the LLM a ton of useful context and precise measurements for the prototype.

<div class="media-grid" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
  <img src="{{ '/assets/images/devlog/printing-a-replacement-outlet-cover/caliper-box-height.jpg' | relative_url }}" alt="Calipers reading 95.13 mm" style="aspect-ratio: 1; object-fit: cover;">
  <img src="{{ '/assets/images/devlog/printing-a-replacement-outlet-cover/caliper-box-depth.jpg' | relative_url }}" alt="Calipers reading 12.57 mm" style="aspect-ratio: 1; object-fit: cover;">
  <img src="{{ '/assets/images/devlog/printing-a-replacement-outlet-cover/cad-skirt.png' | relative_url }}" alt="Rear view showing the 16 mm skirt" style="aspect-ratio: 1; object-fit: cover;">
  <img src="{{ '/assets/images/devlog/printing-a-replacement-outlet-cover/cad-front.png' | relative_url }}" alt="Final CAD front view" style="aspect-ratio: 1; object-fit: cover;">
</div>

## Things are changing fast

This was done in July 2026 and the new models out in September (GPT 5.6 Astra and Fable 1.1) are already both radically more capable at 3D CAD work like this.  It's pretty nuts.
