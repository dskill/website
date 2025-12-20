---
title: "Magic 8 Ball"
date: 2025-12-15
source_slug: magic-8-ball
source_link: /devlog/magic-8-ball
thumbnail: /assets/images/devlog/magic-8-ball/screenshot2.png
---

A voice-controlled Magic 8 Ball running entirely in the browser. No server, no API keys, no data leaving your device.

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/assets/images/devlog/magic-8-ball/screenshot0.png" alt="Magic 8 Ball screenshot" style="flex: 1; max-width: 33%;">
  <img src="/assets/images/devlog/magic-8-ball/screenshot1.png" alt="Magic 8 Ball interface" style="flex: 1; max-width: 33%;">
  <img src="/assets/images/devlog/magic-8-ball/screenshot2.png" alt="Magic 8 Ball response" style="flex: 1; max-width: 33%;">
</div>

Three models run locally via Transformers.js and WebGPU:
- **Whisper-tiny.en** (~40MB) - speech-to-text
- **Qwen3-0.6B** (~150MB) - LLM
- **Supertonic-TTS** (~60MB) - text-to-speech

Qwen at 0.6B is fast but not smart. It can't reason or follow complex instructions. A Magic 8 Ball turned out to be a good fit—it just needs to produce mystical-sounding responses to yes/no questions.

Speak a question, Whisper transcribes it, Qwen generates an answer, TTS reads it back. Shader effects complete the aesthetic. Requires Chrome with WebGPU.

- Try it: [Magic 8 Ball](https://dskill.github.io/magic-8-ball/)
- Source: [magic-8-ball on GitHub](https://github.com/dskill/magic-8-ball)
