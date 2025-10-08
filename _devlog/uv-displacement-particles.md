---
title: "UV Displacement Particles"
date: 2009-03-31
source_slug: "uv-displacement-particles"
source_link: "/devlog/uv-displacement-particles"
---

UV Displacement, aka UV Distortion, aka Pixel Offset, etc..., is a fantastically useful real time vfx technique where the particle texture lookup is perturbed by another texture. Usually that distortion texture resembles a normal map, and is scrolling, scaling, or otherwise given additional motion. We found that by driving this displacement texture with a intensity curve, you could get very interesting visuals resembling fluids that break apart, or in this case, an approximation of the quickly moving gases that form a flame. See the [Brutal Legend VFX Presentation from GDC 2010]({{ '/assets/downloads/GDC2010_VFX.pdf' | relative_url }})for more details.

<div class="experience-video">
  <iframe
    src="https://player.vimeo.com/video/10082746?wmode=opaque&api=1"
    title="UV Displacement Comparison"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
