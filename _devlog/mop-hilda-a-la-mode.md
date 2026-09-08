---
title: "Mop Hilda — \"À la Mode\" Music Video"
date: 2026-08-21
source_slug: mop-hilda-a-la-mode
source_link: /devlog/mop-hilda-a-la-mode
thumbnail: /assets/images/devlog/mop-hilda-a-la-mode/thumbnail.jpg
---

A collaboration with the band [Mop Hilda](https://linktr.ee/mop_hilda) on the music video for their song "À la Mode." I did the visual effects.

<div class="experience-video">
  <iframe
    src="https://www.youtube.com/embed/FwCn9TTv3jg"
    title="Mop Hilda — À la Mode"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

## A Custom Shader Editor

Rather than build the effect shots in a conventional compositing package, I built a custom shader editor for the project — inspired by [Shadertoy](https://www.shadertoy.com/), but aimed at cutting a music video. It runs in the browser on WebGL2: the footage goes in as a texture, a fluid simulation runs on top of it, and the song's live FFT/waveform drives the visuals. Write a shader, hear the track, see the result on the actual plate immediately.

<img src="/assets/images/devlog/mop-hilda-a-la-mode/editor-video-tab.jpg" alt="The shader editor with the parameter panel open over the render" style="max-width: 900px; width: 100%;">

The performer is matted out of the plate ahead of time (through a custom background removal pass), then injected into the sim two ways — as a scalar "splash" that pushes the velocity field around, and as colored ink that gets caught in the flow and smeared. Everything downstream of that is parameters: video transform, vignette, FFT response curves, the ring overlay, palette frequencies, and the sim itself (diffusion, dissipation, max speed, springiness). 

<img src="/assets/images/devlog/mop-hilda-a-la-mode/editor-script-tab.jpg" alt="The cue script timeline, with markers laid over the waveform" style="max-width: 900px; width: 100%;">

The other half of the tool is the script. Every look is saved as a preset, and the video is cut by placing preset cues against the song's beat grid — a marker on the waveform, either a hard cut or an eased transition over a set number of beats. The video edits itself from that list, and I could sit on a single cue, tune it against the music, and move on. Final output is recorded straight out of the canvas at HD.

## Looks

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/assets/images/devlog/mop-hilda-a-la-mode/frame-title.jpg" alt="Opening title treatment" style="flex: 1; max-width: 50%;">
  <img src="/assets/images/devlog/mop-hilda-a-la-mode/frame-contrasty-waves.jpg" alt="Contrasty waves preset" style="flex: 1; max-width: 50%;">
</div>

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/assets/images/devlog/mop-hilda-a-la-mode/frame-contrasty-ripples.jpg" alt="Contrasty ripples preset" style="flex: 1; max-width: 50%;">
  <img src="/assets/images/devlog/mop-hilda-a-la-mode/frame-thin-ring.jpg" alt="Thin ring preset" style="flex: 1; max-width: 50%;">
</div>

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/assets/images/devlog/mop-hilda-a-la-mode/frame-psychedelic.jpg" alt="Psychedelic end preset" style="flex: 1; max-width: 50%;">
  <img src="/assets/images/devlog/mop-hilda-a-la-mode/frame-outro.jpg" alt="Thin ring outro preset" style="flex: 1; max-width: 50%;">
</div>

I love this track, and I'm grateful Mop Hilda let me throw digital paint all over it.

---

**Song:** "À la Mode" by [Mop Hilda](https://www.youtube.com/@Mop_Hilda)<br>
**Shot & Directed by:** Mop Hilda<br>
**Visual Effects:** Drew Skillman<br>
**Stream Mop Hilda:** [linktr.ee/mop_hilda](https://linktr.ee/mop_hilda)<br>
**Watch:** [YouTube](https://www.youtube.com/watch?v=FwCn9TTv3jg)
