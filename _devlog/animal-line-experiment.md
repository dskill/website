---
title: "Animal Line Experiment"
date: 2025-10-13
source_slug: animal-line-experiment
source_link: /devlog/animal-line-experiment
thumbnail: /assets/images/devlog/animal-line-experiment/screenshot.webp
---

![Animal Line Experiment]({{ '/assets/images/devlog/animal-line-experiment/screenshot.webp' | relative_url }})

[Animal Line Game](https://dskill.github.io/silly_sorting_game/) riffs on the Cardline: Animals deck, rebuilt as a living web experiment that can keep expanding over time. The playable demo runs entirely in the browser and turns life expectancy trivia into a quick drag-and-drop sorting challenge.

`CLAUDE.md` maps out the automation stack behind the scenes. A FastAPI service researches new animals on demand, pipes the request through the local `imagine` generator (Flux Pro), updates the JSON roster, and feeds the fresh assets straight back into the session. 

That's the real goal of this experiment: to explore a game that can evolve new content and rules over time, depending on what players ask for.  
