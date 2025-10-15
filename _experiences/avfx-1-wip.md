---
title: "Doctor Rock"
---

## Overview

Doctor Rock is a work-in-progress audiovisual playground that refuses to fit in a single box. It is a dev kit for exploring audiovisual affect generation, a real-time music visualizer capable of loading ShaderToy-style GLSL sketches, a local-network broadcast system for high-resolution displays, and a wrapper around SuperCollider for near-limitless (hardware-dependent) audio processing. It currently runs on a Raspberry Pi 4B, would be even happier on a Pi 5, and pairs those capabilities with an integrated microphone for natural-language agent control while I continue to work toward the final video and software release.

Doctor Rock is an audio visual effect processor and the evolution of the AVFX-1 project.

This project has been a lot of fun to work on, and is the 3rd iteration building on some prior experiments see [prior work and special thanks] sections.

I've made a handful of these for friends, but currently don't have any plans beyond that other than using this as a dev kit for my own audio visual explorations

## Demo Video

<div class="experience-video">
  <iframe
    src="https://www.youtube.com/embed/DUmbHycygms"
    title="Doctor Rock demo"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

## Origin and Iterations

The project started as a playful hardware experiment among friends, took several twists and turns, and then paused for a while. I could never quite let it go, so over the last several years I've been steadily iterating on new hardware and software approaches. Although it was conceived as a guitar pedal originally, it has evolved into more of a dev kit and audiovisual effects processor. One observation along the way is that guitar pedals haven't really changed in ages and would be far more capable with a high-quality built-in display. Guitar pedals still need better, high-quality built-in displays, and while a footswitch could be added externally, putting one directly on the enclosure gives me pause.

What is this?

Doctor Rock is a hobby project that explores audio visual effects for real time music. Audio effects can be just about anything you can dream up, and are tightly coupled to visual effects which can also be just about anything. The audio effect can influence the visuals, and/or the visuals can influence the audio effect.

## Current Hardware Setup

For this iteration, Doctor Rock runs on a Raspberry Pi 4B with a high-quality Raspberry Pi DAC audio HAT that provides stereo in/out over 1/4" jacks, a solid preamp, and straightforward level control. It will run even better on a Raspberry Pi 5. The hardware stack accepts line-level instruments such as guitars, handles microphones cleanly, includes an onboard mic for agent commands, and leaves room for external footswitch inputs if needed.

## Audio Engine and Interaction

SuperCollider powers the audio engine and plays nicely with MIDI, so plugging in a controller enables the agent to help spin up brand-new synthesized polyphonic instruments. Microphone input opens the door to vocoders and other pitch-modulation tricks. A streamlined bridge sends frequency data and waveform amplitudes from SuperCollider into the app, so any input—MIDI, guitar, microphone, or otherwise—can drive whichever visualizer is active.

LLMs are startlingly good at writing new SuperCollider effects with the right guardrails. A `Claude.md`/`agents.md` guide spells out how the system is structured, and the agent can check compilation status, get error feedback, and iterate automatically. Doctor Rock also integrates Claude Code as an AI copilot, making it possible to author or tweak effects entirely through conversational voice instructions.

## Visualization Pipeline

Doctor Rock's visuals are tightly bound to the audio layer. ShaderToy-like GLSL visualizers can be swapped in, tuned by the agent, and distributed across the local network so multiple high-resolution displays stay in sync with minimal overhead. Visual responses react in real time to the frequency and amplitude data that SuperCollider streams over.

## Agent, MCP, and Git Workflows

The device and app run an MCP server that lets the agent manage application state through natural language. That bridge is the key glue between the agent and the application, allowing the agent to create new effects, edit parameters, set defaults, capture logs, and generally keep the system in flow. Because AI agents make tools like Git incredibly intuitive, Doctor Rock leans on Git for effect management and community sharing. A public repository doubles as local storage for personal patches, while branches provide room for experimentation and structured contributions. Because the entire audio engine lives as SuperCollider code inside that repository, adding new capabilities stays straightforward. The MCP integration also means the agent can run Git commands for you, effectively giving the device one of the most powerful version-control workflows available for branching, sharing, and local storage.

## Connectivity and Offline Use

Jam sessions proved the rig has to perform well offline. When Wi-Fi is available you get the full Magenta-powered capabilities and access to the public effects repository, but without connectivity the device keeps working—just without cloud features.

## Software Stack and Deployment

After many permutations, the current stack combines a SuperCollider backend, an Electron application layer, and a React front end. That setup stays cross-platform: I build on macOS and can produce ARM builds for the Pi directly. On startup the application checks GitHub releases and pulls down updates when needed.

## Learnings and Limitations

Even with all these tools, the agent still feels slow—creative flow demands faster iteration than most LLM round-trips allow today. Boot time is similarly sluggish, so I haven't tried to take this onstage; it remains a dev kit more than a live-performance rig. Still, the intersection of generative AI and LLMs, real-time audiovisual systems, and SuperCollider on lightweight hardware continues to feel like fertile ground.

## Setup Notes

There are still some rough edges to iron out. Setting up Git push support requires configuring credentials on-device. Enabling the Magenta LLM features means setting up billing with the agent tool. I added in-app Wi-Fi provisioning, but connecting remains clumsy.

## Work in Progress Gallery

![]({{ '/assets/images/avfx-1-wip/IMG_8613.jpg' | relative_url }})

![]({{ '/assets/images/avfx-1-wip/IMG_9055.jpg' | relative_url }})

![]({{ '/assets/images/avfx-1-wip/screenshot-2025-04-24-21-40-14.png' | relative_url }})

![]({{ '/assets/images/avfx-1-wip/IMG_1451.jpg' | relative_url }})

![]({{ '/assets/images/avfx-1-wip/image2.png' | relative_url }})

![]({{ '/assets/images/avfx-1-wip/IMG_1497.jpg' | relative_url }})

_Image credits: Patrick Hackett and Bryan Minn._
