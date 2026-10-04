---
title: "MyScanVR Store Promo"
date: 2026-10-04
source_slug: myscanvr-promo
source_link: /devlog/myscanvr-promo
thumbnail: /assets/images/devlog/myscanvr-promo/thumbnail.jpg
---

I helped make this trailer for MyScanVR, an app from [Immersive Science](https://www.immsci.com/) for exploring your own CT and MRI scans in VR on a Quest headset.

<div class="experience-video">
  <iframe
    src="https://www.youtube.com/embed/-mH-JKvfxT0"
    title="MyScanVR Store Promo"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

## My LLM Friendly Non-Linear Video Editor

I made this trailer in AutoVideo, a small non-linear editor I've been building. It has basic features like preview, transport, a multi-track timeline, and an inspector. But the timeline and gui state are just JSON text in the project folder.

<img src="/assets/images/devlog/myscanvr-promo/timeline-tag-a.jpg" alt="The AutoVideo editor: preview, timeline with clips tagged A, B and C, and the inspector showing clip A" style="max-width: 900px; width: 100%;">

This makes me and the LLM agents I work with equal collaborators on the same file. The app saves the moment I finish a change, and it reloads whenever anything else touches the project. So while I'm trimming clips, an LLM working in a terminal can be generating a background music track, and it just appears on the music lane while I'm working. Same for voice-over lines, motion-graphics cards, or even newly generated footage.

## Tagging Clips for the LLM

A neat feature I added is clip tagging. Pressing 1, 2 or 3 tags the selected clips A, B or C, and the tags are saved in the edit, so the agent can see them. That gives us shared names for things on the timeline, and instructions get much shorter:

- "Put clip B where A is, trimming it to fit."
- "Generate a voice-over line for clip C."
- "Stick a motion graphic between A and B."

<img src="/assets/images/devlog/myscanvr-promo/timeline-tags.jpg" alt="Zoomed into the timeline: clip A on Story A, then clip C selected on Story B above clip B" style="max-width: 900px; width: 100%;">

The editor also publishes its playhead and current selection, so "replace the selected clip with foobar" works too.

## Media, Music and Motion Graphics

With these techniques, I can collaborate with my agents and do the part a human does best (timing, pacing, storytelling), while the agent speeds ahead helping me generate voice-over takes, post processing variations, and motion-graphics segments. The "Bring your own scans" card and the end card below were both built this way.

<img src="/assets/images/devlog/myscanvr-promo/bring-your-own-scans.jpg" alt="The &quot;Bring your own scans&quot; motion-graphics card, ending on the USB-C drive plugged into the headset" style="max-width: 900px; width: 100%;">

<img src="/assets/images/devlog/myscanvr-promo/end-card.jpg" alt="The MyScanVR end card in the preview" style="max-width: 900px; width: 100%;">

All in all, it's a pretty simple approach but I've been finding it super powerful.  Not sure when I'll be using Adobe Premiere again but I kind of hope never!
