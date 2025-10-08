---
title: "Kinect + Spring Physics"
date: 2011-03-31
source_slug: "kinect-spring-physics"
source_link: "/devlog/kinect-spring-physics"
---

This uses a fun GPU based spring effect I wrote for Double Fine Happy Action Theater. For each pixel, a 2D displacement position and 2D velocity is stored in an RGBA render target. Another shader reads those displacement values and uses it to offset the lookup of the player.

<div class="experience-video">
  <iframe
    src="https://player.vimeo.com/video/31531311?wmode=opaque&api=1"
    title="Kinect + Spring Physics"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
