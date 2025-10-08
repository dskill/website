---
title: "Physics Driven Fur Shader in 3ds Max"
date: 2007-03-31
source_slug: "physics-driven-fur-shader-in-3ds-max"
source_link: "/devlog/physics-driven-fur-shader-in-3ds-max"
---

HLSL implementation of hair/grass using the "concentric spheres" technique. This version expects a per vertex force component to be passed into the shader via vertex data channels. In a separate max script, I calculate per vertex velocity, acceleration, and a compression factor which each have their own contribution weighting. The results of the calculation are baked into the vertex data channels per frame.

<div class="experience-video">
  <iframe
    src="https://player.vimeo.com/video/8664922?wmode=opaque&api=1"
    title="HLSL Physical Fur Shader Simulation in 3ds Max"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

<div class="experience-video">
  <iframe
    src="https://player.vimeo.com/video/8664902?wmode=opaque&api=1"
    title="HLSL Physical Fur Shader Simulation in 3ds Max 2"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
