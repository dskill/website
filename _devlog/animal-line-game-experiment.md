---
title: "Animal Line Game Experiment"
date: 2025-10-13
source_slug: animal-line-game-experiment
source_link: /devlog/animal-line-game-experiment
---

[Animal Line Game](https://dskill.github.io/silly_sorting_game/) is a playful riff on the Cardline: Animals board game, rebuilt as a living web experiment that can evolve  over time. 

Per the [project notes](https://github.com/dskill/silly_sorting_game), the frontend is a React + Vite + Tailwind build that wraps the core game loop: animals shuffle into a single row, touch-friendly drop zones appear as you reorder cards by lifespan, and the UI walks through correct/incorrect reveal states without breaking flow.

The magic lives in the supportive tooling documented in `CLAUDE.md`. A FastAPI service researches new animals on demand, pipes the request through the local `imagine` generator (Flux Pro), updates the JSON roster, and feeds the fresh assets straight back into the session. It keeps the experience feeling handcrafted while letting me prototype agent-assisted content updates.