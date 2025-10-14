---
title: "Animal Line Experiment"
date: 2025-10-13
source_slug: animal-line-experiment
source_link: /devlog/animal-line-experiment
thumbnail: /assets/images/devlog/animal-line-experiment/screenshot.webp
---

[![Animal Line Experiment]({{ '/assets/images/devlog/animal-line-experiment/screenshot.webp' | relative_url }})](https://dskill.github.io/silly_sorting_game/)

[Animal Line Game](https://dskill.github.io/silly_sorting_game/) is a little, experimental riff on the [Cardline: Animals](https://www.redballoon.com/product/cardline-animals-card-game/26296?srsltid=AfmBOorp-SBwzVohcSfsxPP3IOFh-olygxck9qsqkVMI0-A7sHQYJpUB) deck, rebuilt as a living web experiment that can expand over time. 

The [project repo](https://github.com/dskill/silly_sorting_game) includes a `CLAUDE.md` that maps out the automation stack behind the scenes. A FastAPI service researches new animals on demand, pipes the request through the local `imagine` generator (Flux Pro), updates the JSON roster, and feeds the fresh assets straight back into the session. 

That's the real goal of this experiment: to explore a game that can evolve new content and rules over time, depending on what players ask for.  

*Note: the generative capabilities are client side only at the moment.*
