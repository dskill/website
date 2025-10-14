---
title: "Animal Line Game Experiment"
date: 2025-10-13
source_slug: animal-line-game-experiment
source_link: /devlog/animal-line-game-experiment
thumbnail: /assets/images/devlog/animal-line-game-experiment/silly-sorting-game.png
---

![Animal Line Game]({{'/assets/images/devlog/animal-line-game-experiment/silly-sorting-game.png' | relative_url}})

[Animal Line Game](https://dskill.github.io/silly_sorting_game/) riffs on the Cardline: Animals deck, rebuilt as a living web experiment that can keep expanding over time. The playable demo runs entirely in the browser and turns life expectancy trivia into a quick drag-and-drop sorting challenge.

Per the project's README, the frontend is a React + Vite + Tailwind build that wraps the core loop: animals shuffle into a single row, touch-friendly drop zones appear as you reorder cards by lifespan, and the UI walks through correct/incorrect reveal states without killing the flow.

`CLAUDE.md` maps out the automation stack behind the scenes. A FastAPI service researches new animals on demand, pipes the request through the local `imagine` generator (Flux Pro), updates the JSON roster, and feeds the fresh assets straight back into the session. It keeps the experience feeling handcrafted while letting me prototype agent-assisted content updates.

Shipping stays low friction thanks to the GitHub Pages workflow—`npm run build:pages` exports the bundle straight into `docs/` with a `.nojekyll` drop-in, which keeps the demo deployable alongside these notes.
