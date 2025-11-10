---
title: Painting Reference Tool
date: 2025-11-10
source_slug: painting-reference-tool
source_link: /devlog/painting-reference-tool
thumbnail: /assets/images/devlog/painting-reference-tool/thumbnail.jpg
---

A web-based tool that helps you compare your paintings with reference photos during the creative process. The app uses OpenCV.js to automatically detect borders, apply perspective correction, and enable real-time fullscreen comparison between your work and reference images.

**Try it here:** [https://dskill.github.io/painting-ref-tool/](https://dskill.github.io/painting-ref-tool/)

<!-- TODO: Add example images showing the tool in action -->
![Example usage]({{ '/assets/images/devlog/painting-reference-tool/example-01.jpg' | relative_url }})

<!-- TODO: Add demo video when available -->
<div class="experience-video">
  <iframe
    src=""
    title="Painting Reference Tool Demo - Coming Soon"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

## How to Use

1. Load a reference image
2. Capture or upload a photo of your painting
3. The tool automatically detects borders and applies perspective correction
4. Enter your artwork's aspect ratio if it differs from the reference
5. Toggle between reference and artwork in fullscreen mode
6. Adjust rotation, scale, position, and opacity to compare details

## Tricky Parts

The core challenge is alignment. For this tool to work—to help you identify mismatches in value, shape, features, or other structures between your art and the reference—the alignment between the two images needs to be as close as possible.

If you capture your painting at an oblique angle, perspective correction becomes difficult. The solution: manually entering your artwork's aspect ratio. Since you typically work on a single piece for an extended period, entering the aspect ratio once at the start trivializes all perspective corrections for the entire session. This feels like a great trade-off.

Obviously, if your reference and artwork have identical aspect ratios, this becomes trivial—that's the default assumption.

## Future Work

A few ideas for where this could go:

- **Database storage**: Right now projects live in the browser's document storage, and there's only a single session. Storing projects in a database would let you work on multiple pieces and track progress over time.

- **Time-lapse videos**: The tool already captures snapshots of your work—it would be straightforward to generate time-lapse videos of your creative process.

- **Hold-to-preview mode**: Instead of a capture button, the camera could activate when you hold your thumb on the screen, showing real-time perspective correction. In practice, I find it more convenient to use the app as a reference display and switch to comparison view only when needed, but it's worth experimenting with.

## Closing Thoughts

Two years from now, I would expect this type of thing to be built into AR glasses—that will both be cool, and feel like maybe the kind of tool that keeps people from learning the entire point of sketching and painting: learning how to see.

This was a fun app to build, and I find it a useful training tool, but you can imagine the future where it becomes a bit of a slippery slope into slop.
