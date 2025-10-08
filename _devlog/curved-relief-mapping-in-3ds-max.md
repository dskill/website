---
title: Curved Relief Mapping in 3ds Max
date: 2007-03-31
source_slug: curved-relief-mapping-in-3ds-max
source_link: /devlog/curved-relief-mapping-in-3ds-max
thumbnail_video: https://player.vimeo.com/video/8664887?wmode=opaque&api=1
---

This implementation of Fabio Policarpo's Curved Relief Mapping uses a modified version of the CG shader he developed. Like standard relief mapping, but uses a per vertex quadric curvature approximation to "wrap" the height map along the object's profile. This per vertex curvature approximation is calculated via maxscript in a preprocessing step.

This script that makes this possible computes the quadric curvature of an editable_mesh per vertex, and stores the calculated quadric coefficients in a vertex data channel (map channel).  Combine this with the provided "**Curved Relief Mapping**" HLSL shader, and you should be able to recreate the effect seen in the [vfx](http://drewskillman.com/vfx.html) section.

**Maxscript:** [Super Quadric Computation](http://drewskillman.com/scripts/superQuadricComputation.ms) (Currently has no UI - just run the script while an editable_mesh is selected)

**HLSL:** [Curved Relief Mapping Shader](http://drewskillman.com/scripts/reliefMappingCurved.fx) (Requires PixelShader 3.0 capable GFX card AND the script above)

<div class="experience-video">
  <iframe
    src="https://player.vimeo.com/video/8664887?wmode=opaque&api=1"
    title="HLSL Curved Relief Mapping in 3ds Max"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
