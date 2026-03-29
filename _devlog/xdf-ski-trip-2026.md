---
title: "Ski Game (X-DF Ski Trip 2026)"
date: 2026-03-01
source_slug: xdf-ski-trip-2026
source_link: /devlog/xdf-ski-trip-2026
thumbnail: /assets/images/devlog/xdf-ski-trip-2026/XDFSki-mainimage.png
---

Every year a bunch of friends and family get together in Tahoe for skiing, cooking, eating, drinking, board games, video game playing, and usually some light video game making as the cherry on top of a great few days. This trip started as the officially sanctioned Double Fine ski trip, but took on a life of its own and now we affectionately call it the "X DF Ski Trip", but not because we're X Double Fine employees (many people who go still work at Double Fine) but the ski trip itself is no longer officially a DF thing. That's a lot of explanation of what this post is NOT about.

It's actually about making a multiplayer video game, hosted on a VM, where as many people as you can fit in a house can play with their phone as a controller, and with a diffusion based pixel art character generator because why not.

<div class="media-grid">
  <img src="/assets/images/devlog/xdf-ski-trip-2026/lobby-start.png" alt="Lobby screen — players joining via QR code">
  <img src="/assets/images/devlog/xdf-ski-trip-2026/XDFSki-mainimage.png" alt="XDF Ski Trip Game 2026">
</div>

## The Concept

The Double Fine ski trip always needs a game. Something chaotic and fun that everyone can play from their phones on a shared screen sounded fun for this year, and was an idea I always wanted to test out. The result: a SkiFree-inspired multiplayer downhill ski racing party game, built over a weekend.

Each player joins from their phone by scanning a QR code. They take a selfie, describe their outfit, and name their signature trick move. The Gemini API turns all of that into a pixel art character sprite sheet with a few simple frames. Then everyone races down the mountain at once on the TV.

We probably needed another day to make it a "good" game, but it was very silly, and it worked! Which was kinda the point.

## How It Works

The game is server-authoritative: a Node.js backend runs physics at 30Hz and broadcasts state to all connected clients. The TV runs the host display — a full 1080p canvas renderer with parallax snow, pixel-art obstacles, and a retro scoreboard. Phones act as controllers with a twin-stick layout: left stick to steer, right stick to aim and auto-fire snowballs.

One-minute timed rounds. Points for hitting jumps (+100), collecting food pickups like lasagna and enchiladas (+150), and pelting other players with snowballs (+75). Penalties for wiping out on trees and rocks (-50). And 15 seconds before the round ends, the yeti spawns and chases the nearest player — contact means a brutal -250 point swing.

![Players racing downhill — pixel art characters dodging obstacles](/assets/images/devlog/xdf-ski-trip-2026/skiing-action.gif)



![Skiing option I — final 5 seconds, red timer, lasagna pickups](/assets/images/devlog/xdf-ski-trip-2026/skiing-i.gif)

## Sprite Generation

The best part might be the character creation. Players describe what they're wearing and what their signature trick looks like. Gemini interprets this as liberally as possible — the prompt actively encourages chaos. The result is a 256x64 pixel art sprite sheet with four frames: skiing straight, left, right, and the custom trick pose. White backgrounds are removed client-side via BFS flood fill. Early implementations had the diffusion generator consistently messing up the left/right sprite orientations, but that was later fixed with more careful prompting.

![Character creation — Gemini generating pixel art sprites](/assets/images/devlog/xdf-ski-trip-2026/xdfski-creator.gif)

![Race Over — final standings](/assets/images/devlog/xdf-ski-trip-2026/race-over.png)
