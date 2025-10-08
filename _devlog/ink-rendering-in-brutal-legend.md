---
title: Ink Rendering in Brutal Legend
date: 2009-03-31
source_slug: ink-rendering-in-brutal-legend
source_link: /devlog/ink-rendering-in-brutal-legend
thumbnail: /assets/downloads/GDC2010_VFX.pdf
---

This video shows the ink rendering technology I developed for Brutal Legend with our graphics and animation teams. Ink was quite a challenge for us as Ophelia's character is in a constant state of flux between fluid ink and her solid form. The final technique involved rendering the ink to a low-res buffer and performing some thresholding operations on it to extract the most interesting details (seen in the debug mode at the end of the video). Although it is taken in a graybox room, this is the same effect used in the shipping title. See the [Brutal Legend VFX Presentation from GDC 2010]({{ '/assets/downloads/GDC2010_VFX.pdf' | relative_url }}) for more details

<div class="experience-video">
  <iframe
    src="https://player.vimeo.com/video/8733874?wmode=opaque&api=1"
    title="Ink Particles and Rendering in Brutal Legend"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

<div class="experience-video">
  <iframe
    src="https://player.vimeo.com/video/10082765?wmode=opaque&api=1"
    title="An example of "
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
