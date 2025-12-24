---
title: "Maze Face"
date: 2025-12-23
source_slug: maze-face
source_link: /devlog/maze-face
thumbnail: /assets/images/devlog/maze-face/app-screenshot.png
---

TODO: 
  Placeholder images needed (in assets/images/devlog/maze-face/):
  | File               | Purpose                                     |
  |--------------------|---------------------------------------------|
  | app-screenshot.png | Main app interface (also used as thumbnail) |
  | maze-detail-1.png  | Close-up showing variable cell density      |
  | maze-detail-2.png  | Close-up showing line weight variation      |
  | plotter-1.jpg      | AxiDraw in action                           |
  | plotter-2.jpg      | Finished pen plot                           |
  | laser-1.jpg        | Laser cut result on wood/acrylic            |
  | laser-2.jpg        | Detail of laser cut piece                   |

Turn portraits into solvable mazes. An experiment in combining procedural generation with portraiture—sparked by recent watercolor portrait exercises.

- Try it: [Maze Face](https://dskill.github.io/maze-face/)
- Source: [maze-face on GitHub](https://github.com/dskill/maze-face)

![App interface showing portrait-to-maze conversion]({{ '/assets/images/devlog/maze-face/app-screenshot.png' | relative_url }})

## How It Works

The algorithm uses adaptive quadtree subdivision. It recursively divides the image based on brightness variance—detailed or dark areas get smaller cells, smooth or bright areas get larger ones. A standard maze algorithm then carves passages through this irregular grid.

Variable line weights create shading: darker regions get thicker walls, lighter regions get thinner ones. The result reads as both a portrait and a navigable maze.

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="{{ '/assets/images/devlog/maze-face/maze-detail-1.png' | relative_url }}" alt="Maze detail showing variable cell density" style="flex: 1; max-width: 50%;">
  <img src="{{ '/assets/images/devlog/maze-face/maze-detail-2.png' | relative_url }}" alt="Maze detail showing line weight variation" style="flex: 1; max-width: 50%;">
</div>

## Pen Plotting

The tool integrates directly with AxiDraw plotters via WebSerial. Stroke width maps to pen pressure—darker areas press harder, lighter areas lift slightly. This translates the digital shading into physical mark-making.

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="{{ '/assets/images/devlog/maze-face/plotter-1.jpg' | relative_url }}" alt="AxiDraw plotting a maze portrait" style="flex: 1; max-width: 50%;">
  <img src="{{ '/assets/images/devlog/maze-face/plotter-2.jpg' | relative_url }}" alt="Completed pen plot" style="flex: 1; max-width: 50%;">
</div>

## Laser Cutting

SVG export includes a laser-cut mode that colors strokes by weight—designed for Glowforge layer separation. Thicker walls can be cut deeper or with more power, creating tactile depth in the final piece.

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="{{ '/assets/images/devlog/maze-face/laser-1.jpg' | relative_url }}" alt="Laser cut maze on wood" style="flex: 1; max-width: 50%;">
  <img src="{{ '/assets/images/devlog/maze-face/laser-2.jpg' | relative_url }}" alt="Detail of laser cut maze" style="flex: 1; max-width: 50%;">
</div>

## Connection to Portraiture

I've been practicing watercolors for a number of years, and recently was exploring watercolor portraits.  This project is a bit of a break from the traditional approaches, but still leans on the same fundamental exercise: conveying the values and form of a likeness such that, at a glance, it evokes the subject. 

The symbolism of the maze is a little heavy handed, but I've often thought that the path of life can be maze like in a way.  And the way our faces reflect the journey that we've been on struck me as an interesting parallel and an opportunity to push that symbolism, quite literally.