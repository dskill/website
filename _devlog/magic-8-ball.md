---
title: "Magic 8 Ball"
date: 2025-12-15
source_slug: magic-8-ball
source_link: /devlog/magic-8-ball
---

The goal was simple: build a web app that runs entirely on-device models. No server round-trips, no API keys, no data leaving the browser. Just WebGPU and whatever fits in memory.

The stack ended up being three models running in the browser via Transformers.js:
- **Whisper-tiny.en** (~40MB) for speech-to-text
- **Qwen3-0.6B** (~150MB) for the LLM
- **Supertonic-TTS** (~60MB) for text-to-speech

I started with grander ambitions. The problem is that Qwen at 0.6B parameters is fast but extremely stupid. It can string words together, but asking it to do anything remotely clever—reasoning, planning, following multi-step instructions—is a losing game. After a few failed experiments trying to make it do interesting real work, I realized the best path forward was to lean into its limitations.

A Magic 8 Ball is the perfect application for a model that can't really think. All it needs to do is generate vaguely mystical-sounding nonsense in response to yes/no questions. The randomness isn't a bug—it's the whole point. The less coherent the model, the more authentic the fortune-telling experience.

You speak your question, Whisper transcribes it, Qwen hallucinates an answer, and TTS reads it back with appropriately spooky shader effects. The whole thing runs locally in Chrome with WebGPU support.

- Source: [magic-8-ball on GitHub](https://github.com/dskill/magic-8-ball)
