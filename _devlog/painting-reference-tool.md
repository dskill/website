---
title: Painting Reference Tool
date: 2025-11-10
source_slug: painting-reference-tool
source_link: /devlog/painting-reference-tool
thumbnail: /assets/images/devlog/painting-reference-tool/thumbnail.jpg
---

A web-based tool that helps you compare your paintings with reference photos during the creative process. The app uses OpenCV.js to automatically detect borders, apply perspective correction, and enable real-time fullscreen comparison between your work and reference images.

**Try it here:** [https://dskill.github.io/painting-ref-tool/](https://dskill.github.io/painting-ref-tool/)

![Painting sequence: reference, canvas with rect, completed canvas]({{ '/assets/images/devlog/painting-reference-tool/sequence.jpg' | relative_url }})

## How to Use

1. Load a reference image
2. Capture a photo of your in progress artwork. Best results come from a somewhat straight on angle.  Experiment with "edge" vs. "fill" detection modes to see what works best for your piece.
3. The tool automatically detects borders and applies perspective correction
4. Enter your artwork's aspect ratio if it differs from the reference
6. Adjust scale and position to align artwork with reference, if necessary (only needed the 1st time)
5. Press on the screen to quickly toggle between reference and artwork to quickly spot shape, color, and other differences.

<div class="media-grid" markdown="1">
![Positioning settings]({{ '/assets/images/devlog/painting-reference-tool/positioning_settings.PNG' | relative_url }})

![Positioning settings]({{ '/assets/images/devlog/painting-reference-tool/positioning_settings_2.PNG' | relative_url }})
</div>

## Tricky Parts

The core challenge is alignment. For this tool to work—to help you identify mismatches in value, shape, features, or other structures between your art and the reference—the alignment between the two images needs to be as close as possible.

If you capture your painting at an oblique angle, accurate perspective correction becomes difficult. The solution: manually entering your artwork's aspect ratio. Since you typically work on a single piece for an extended period, entering the aspect ratio once at the start trivializes all perspective corrections for the entire session. This feels like a great trade-off.

We use the reference's aspect ratio as the default assumption.

## Future Work

A few ideas for where this could go:

- **Highter prescision alignemnt**: The algorithms used to detect the edges of the artwork are pretty basic, tuned for real time use.  We could do a lot better here with a bit more elbow grease and that would make using the tool easier.

- **Database storage**: Right now projects live in the browser's document storage, and there's only a single session. Storing projects in a database would let you work on multiple pieces and track progress over time.

- **Time-lapse videos**: The tool already captures snapshots of your work—it would be straightforward to generate time-lapse videos of your creative process.

- **Hold-to-preview mode**: Instead of a capture button, the camera could activate when you hold your thumb on the screen, showing real-time perspective correction. In practice, I find it more convenient to use the app as a reference display and switch to comparison view only when needed, but it's worth experimenting with.

## Camera Obscura and other optical alignment tools.

Long before phones and AR headsets, artists were already experimenting with ways to overlay reality onto a surface to make drawing easier. The camera obscura and camera lucida were essentially early optical alignment tools—devices that projected or superimposed a subject so an artist could trace proportions with uncanny accuracy. Vermeer, Canaletto, and countless lesser-known painters used these techniques not as cheats, but as ways to discipline their eyes: to study perspective, light falloff, and proportion with a fidelity that pure guesswork couldn’t match. In a way, tools like this app echo that lineage—they’re digital descendants of the same impulse to bring the subject and the artwork into the same visual plane, to let one inform the other in real time.

But historically, artists used these devices sparingly. The projection wasn’t meant to replace observation—it was a scaffold, a temporary crutch that eventually fell away once the artist internalized what they saw. That’s the tension with modern tools, especially as AR approaches the ease and invisibility of eyeglasses. The closer we get to real-time overlays and perfect alignment, the easier it becomes to bypass the slow, frustrating work of actually learning to see. This project sits right on that boundary: useful for training your perception, but also a reminder that the tech can only help you compare—not understand. The understanding still has to be earned the old-fashioned way.

![Camera obscura]({{ '/assets/images/devlog/painting-reference-tool/camera-obscura-01.jpg' | relative_url }})
