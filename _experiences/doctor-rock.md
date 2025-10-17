---
title: "Doctor Rock"
---
![]({{ '/assets/images/doctor-rock/IMG_8613.jpg' | relative_url }})

# Overview

Doctor Rock is an experimental project that combines audio visual effects processing with real-time music visualization. It is a dev kit for exploring audiovisual affect generation, a real-time music visualizer capable of loading ShaderToy-style GLSL sketches, a local-network broadcast system for high-resolution displays, and a wrapper around SuperCollider for near-limitless (hardware-dependent) audio processing.

The app is cross platform but the current build runs on a Raspberry Pi 4B with a Pisound HAT running Patchbox OS. An integrated microphone provides natural-language agent control.

## Demo Video

<div class="experience-video">
  <iframe
    src="https://www.youtube.com/embed/F8hc9fiANtE"
    title="Doctor Rock demo"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

## Origin and Iterations

The project started as a playful hardware experiment among friends, took several twists and turns, and then paused for a while. I could never quite let it go, so over the last several years I've been steadily iterating on new hardware and software approaches. Although it was conceived as a guitar pedal originally, it has evolved into more of a dev kit and audiovisual effects processor. One observation along the way is that guitar pedals haven't really changed in ages and would be far more capable with a high-quality built-in display. It's not quite fair to call it a guitar pedal even though that's the inspiration, because I never stuck a footswitch on it.

## Current Hardware Setup

For this iteration, Doctor Rock runs on a Raspberry Pi 4B paired with a [Pisound](https://blokas.io/pisound/) HAT that delivers ~2.1 ms loopback latency while providing balanced stereo in/out over 1/4" jacks, a solid preamp, and level control.  The rig boots into [Patchbox OS](https://blokas.io/patchbox-os/), whose real-time Linux kernel keeps audio processing in the low-single-digit millisecond range. The hardware stack accepts line-level instruments such as guitars, handles microphones cleanly, midi inputs (keyboards/faders/etc) includes an onboard mic for agent commands, and leaves room for external footswitch inputs if needed.

## CAD Modeling

I modeled and designed the enclosure in Fusion 360, and laser cut it on my Glowforge.  There were probably about 20 different variations as I explored the best way to fit all the components, while keeping the project extensible (e.g. not blocking access to USB ports, sd card slots, etc).
<div class="media-grid">
  <img src="{{ '/assets/images/doctor-rock/wireframe1.png' | relative_url }}" alt="Doctor Rock wireframe design 1">
  <img src="{{ '/assets/images/doctor-rock/wireframe2.png' | relative_url }}" alt="Doctor Rock wireframe design 2">
</div>

## Agentic Control and Natural Language Processing

LLMs are startlingly good at writing new SuperCollider effects with the right guardrails. A `Claude.md`/`agents.md` guide spells out how the system is structured, and the agent can check compilation status, get error feedback, and iterate automatically. Doctor Rock also integrates Claude Code as an AI copilot, making it possible to author or tweak effects entirely through conversational voice instructions.

## Visualization Pipeline

Doctor Rock's visuals are tightly bound to the audio layer. ShaderToy-like GLSL visualizers can be swapped in, tuned by the agent, and distributed across the local network so multiple high-resolution displays stay in sync with minimal overhead. Visual responses react in real time to the frequency and amplitude data that SuperCollider streams over.  

Supercollider sends realtime waveform data to the visualizer via OSC.  The front end (and MCP servers) can control Supercollider via OSC as well.

## MCP server and Git Workflows

The device and app run an MCP server that lets the agent manage application state through natural language. That bridge is the key glue between the agent and the application, allowing the agent to create new effects, edit parameters, set defaults, capture logs, and generally keep the system in flow. Because AI agents make tools like Git incredibly intuitive, Doctor Rock leans on Git for effect management and community sharing. A public repository doubles as local storage for personal patches, while branches provide room for experimentation and structured contributions. Because the entire audio engine lives as SuperCollider code inside that repository, adding new capabilities stays straightforward. The MCP integration also means the agent can run Git commands for you, effectively giving the device one of the most powerful version-control workflows available for branching, sharing, and local storage.

## Software Stack and Deployment

After many permutations, the current stack combines a SuperCollider backend, an Electron application layer, and a React front end. That setup stays cross-platform: I build on macOS and can produce ARM builds for the Pi directly. On startup the application checks GitHub releases and pulls down updates when needed.

Playing with friends proved the rig has to perform well offline. When Wi-Fi is available you get the full AI-powered capabilities and access to the public effects repository, but without connectivity the device keeps working—just without cloud features.

## Turtles all the way down: AI's involvement in development

Doctor Rock has doubled as a sandbox for learning how to collaborate with ever-more-capable AI tools. Early builds leaned on GPT-3.5 for code review and rubber-ducking, but much of the heavy lifting still happened by hand. Each time the models advanced, another piece of the workflow became faster: debugging, shader authoring, documentation, and even new SuperCollider patches started flowing through conversational prompts. Today development is not vibe coded, but is very high level. The LLM shapes large portions of the stack while I focus on direction, integration, and the physical build. The emphasis has always been on proving out ideas quickly rather than polishing production-ready code, and that bias toward rapid experimentation keeps the project evolving alongside the tooling.

To be clear, I am not proud of the code written for this.  It is definitely "code as a means to an end". There is nothing remotely pretty about it, but I am proud of the overall structure.

## Learnings and Limitations
- The agent capabilities are still too slow for the creative flow state they are intended to unlock. 
- Raspberry Pi boot time is slow (not optimized).
- Setting up Git push support requires configuring credentials on-device. 
- Enabling the agentic LLM features means setting up billing with the agent tool. 
- I added in-app Wi-Fi provisioning, but connecting remains clumsy.

## Contributers and Attributions

Shoutout to Patrick Hackett and Brian Min for co-creating the initial prototype.  Maybe we'll regroup on a bigger production push someday.
![]({{ '/assets/images/doctor-rock/screenshot-2025-04-24-21-40-14.png' | relative_url }})
*Initial prototype from 2022*

Shoutout to Matthew Bice who inspired the 2nd iteration, where you actually talk to him and he talks back.

<div class="media-grid">
  <img src="{{ '/assets/images/doctor-rock/IMG_1497.jpg' | relative_url }}" alt="Doctor Rock assembly">
  <img src="{{ '/assets/images/doctor-rock/IMG_1451.jpg' | relative_url }}" alt="Doctor Rock assembly">
</div>
*2nd iteration from 2023*

Since the app can use ShaderToy-style GLSL sketches, many of the visualizers are modified versions of the original ShaderToy sketches. For example:
- [Neon Love – alro](https://www.shadertoy.com/view/WdK3Dz)
- [Oscilloscope – incription](https://www.shadertoy.com/view/slc3DX)
- [Waves Remix – ADOB](https://www.shadertoy.com/view/4ljGD1)

Whenever possible, I've tried to maintain the original author's license and credit them in the effects.

# Thanks!
Wow you made it this far!  Thanks for reading.  This has been a really fun project and I'm sure its not over yet.  

If you want to learn more about my work or get in touch, check out my [info here](/about).

![]({{ '/assets/images/doctor-rock/IMG_9055.jpg' | relative_url }})

