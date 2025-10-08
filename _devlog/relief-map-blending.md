---
title: "Relief Map Blending"
date: 2007-03-31
source_slug: "relief-map-blending"
source_link: "/devlog/relief-map-blending"
---

Normal map and Relief Maps are blended in this shader. Depth, Diffuse, Specular and Normal maps are modulated based on a vertex data channel values which allows interactive viewport experimentation. Note the convincing irregularities that occur when the vertex channel has partial opactiy.

<div class="experience-video">
  <iframe
    src="https://player.vimeo.com/video/8664844?wmode=opaque&api=1"
    title="HLSL Relief Map Blending Shader in 3ds Max"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
