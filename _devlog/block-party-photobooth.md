---
title: "Block Party Photobooth"
date: 2026-04-28
source_slug: block-party-photobooth
source_link: /devlog/block-party-photobooth
thumbnail: /assets/images/devlog/block-party-photobooth/thumbnail.jpg
---

A Raspberry Pi photobooth for the neighborhood block party. Electron/React kiosk app, 7" touch display, C920 on top, Selphy CP1500 for the prints. Ongoing project.

Start and finish.

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/assets/images/devlog/block-party-photobooth/sketch.jpg" alt="Pencil sketch of the photobooth enclosure" style="flex: 1; max-width: 50%;">
  <img src="/assets/images/devlog/block-party-photobooth/start-screen.jpg" alt="The finished booth showing the Start screen" style="flex: 1; max-width: 50%;">
</div>

A coding agent wrote the kiosk app, including the network plumbing from the Pi to the Selphy CP1500 — CUPS, discovery, and the print queue.

A second agent did the CAD — parametric CadQuery, iterating on the frame, the camera shelf, and the tripod mount until the previews looked right.  Final cosmetic changes were done in Fusion 360.

<img src="/assets/images/devlog/block-party-photobooth/cad-session.png" alt="Terminal session iterating on the CAD model" style="max-width: 900px; width: 100%;">

<img src="/assets/images/devlog/block-party-photobooth/cad-preview.png" alt="Six-view preview of the display mount model" style="max-width: 900px; width: 100%;">

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/assets/images/devlog/block-party-photobooth/pi-guts.jpg" alt="Raspberry Pi mounted behind the display" style="flex: 1; max-width: 50%;">
  <img src="/assets/images/devlog/block-party-photobooth/assembly-back.jpg" alt="Back of the assembled enclosure" style="flex: 1; max-width: 50%;">
</div>

<img src="/assets/images/devlog/block-party-photobooth/assembly-front.jpg" alt="Assembled display and camera shelf" style="max-width: 900px; width: 100%;">

<img src="/assets/images/devlog/block-party-photobooth/on-tripod.jpg" alt="Photobooth mounted on a tripod" style="max-width: 900px; width: 100%;">

And it prints!

<img src="/assets/images/devlog/block-party-photobooth/photo-strip.jpg" alt="Printed photo strip from the booth" style="max-width: 700px; width: 100%;">

I've made a few variations of this for parties since.  Will post those at some point.