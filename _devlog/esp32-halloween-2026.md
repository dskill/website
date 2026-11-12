---
title: "Halloween 2026 ESP32 Experiments"
date: 2026-11-11
source_slug: esp32-halloween-2026
source_link: /devlog/esp32-halloween-2026
thumbnail: /assets/images/devlog/esp32-halloween-2026/thumbnail.jpg
---

A few Halloween experiments with Waveshare ESP32 boards: a Storm Trooper voice watch, a HAL 9000 that greets trick-or-treaters, and a helmet voice changer.

The hardware:

- [ESP32-S3-Touch-AMOLED-2.06](https://www.waveshare.com/esp32-s3-touch-amoled-2.06.htm) watches
- [ESP32-S3-AUDIO-Board](https://www.waveshare.com/esp32-s3-audio-board.htm) for the speaker (HAL's voice and the voice changer)
- [ESP32-S3-Touch-LCD-2.8C](https://www.waveshare.com/esp32-s3-touch-lcd-2.8c.htm) round display for HAL's eye

Several of the experiments talk board to board over ESP-NOW, which uses the Wi-Fi radio without needing a network. That lets the Storm Trooper watch remote work while trick-or-treating with no hotspot.

<div class="experience-video">
  <iframe
    src="https://www.youtube.com/embed/8RWuuIYlBaA"
    title="Halloween 2026 ESP32 Experiments"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

![Two watches: one as the Storm Trooper speaker, the other picking a line to say](/assets/images/devlog/esp32-halloween-2026/storm-trooper-watch.jpg)

<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/assets/images/devlog/esp32-halloween-2026/hal-porch.jpg" alt="HAL 9000 greeting trick-or-treaters on the front porch, next to a pumpkin" style="flex: 1; max-width: 50%;">
  <img src="/assets/images/devlog/esp32-halloween-2026/hal-monolith.jpg" alt="HAL 9000 with its glowing red eye on a dresser" style="flex: 1; max-width: 50%;">
</div>

![HAL's round eye display, the AUDIO-Board speaker, and three watches on the workbench](/assets/images/devlog/esp32-halloween-2026/boards.jpg)
