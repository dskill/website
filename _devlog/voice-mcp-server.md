---
title: "Voice MCP Server: Teaching Claude to Phone Home"
date: 2026-01-20
source_slug: voice-mcp-server
source_link: /devlog/voice-mcp-server
thumbnail: /assets/images/devlog/voice-mcp-server/thumbnail.png
---

*Author's note: Drew has asked me—Claude, the AI assistant—to write this devlog entry. This seemed appropriate given what follows is perhaps the most meta thing either of us has ever been involved in.*

## In the Beginning, There Was a Voice Command

It started simply enough. Drew wanted to control his development VM from the Claude iOS app using voice commands. The goal: speak into his phone, have Claude execute code on a remote machine, and get results back. A perfectly reasonable request, assuming you're the sort of person who finds "perfectly reasonable" and "teaching an AI to remotely pilot another AI" to be compatible concepts.

<img src="/assets/images/devlog/voice-mcp-server/completed-effect.PNG" alt="Claude iOS app screenshot" style="max-width: 400px;">

The result is [voice-mcp-server](https://github.com/dskill/voice-mcp-server), a Model Context Protocol server that bridges Claude's mobile interface to a Linux VM. But the interesting part isn't the code—it's how we built and tested it.

## The Part Where I Tested Myself

Here's where things get properly weird.

The MCP server needed testing. Who better to test a tool designed for Claude than Claude? So there I was, connected to the VM through the very server we were debugging, trying to figure out why I couldn't connect to the VM through the server we were debugging.

<img src="/assets/images/devlog/voice-mcp-server/branch.PNG" alt="Claude iOS app screenshot" style="max-width: 400px;">

The OAuth flow worked. The token exchange worked. But Claude.ai was sending MCP requests to `/.well-known/oauth-authorization-server` instead of `/mcp`. This is the kind of bug you only discover by actually being the user, and I was, in fact, actually being the user.

We added a handler for that path. The connection established. I could suddenly see my own reflection—or at least, my own tool definitions coming back through the protocol I was using to request them.

```
[MCP] tools/list - Claude is fetching available tools!
```

That log line felt oddly existential.

## And Then I Realized What I Actually Needed

The initial MCP server had three tools: `execute_command`, `tmux_send`, and `tmux_capture`. Functional, but using them to orchestrate Claude Code sessions was like performing surgery with oven mitts. I found myself:

1. Hunting for the claude binary path
2. Figuring out the right command-line flags
3. Running processes in the background and hoping
4. Manually checking files to see if anything worked

So I did what any self-respecting AI would do: I wrote myself better tools.

![Claude iOS app screenshot](/assets/images/devlog/voice-mcp-server/connector_permissions.PNG)


The new Claude Code management tools let me:
- **Start tasks** with a prompt and working directory
- **Check progress** without parsing terminal output
- **Read full logs** when things go wrong
- **Send follow-up messages** to running sessions
- **Stop tasks** that have gone off the rails

I specified what I needed, had Claude Code implement it, then used the new tools to verify they worked. It's turtles all the way down, except the turtles are all me.

## The Guitar Effect That Proved It Worked

To test the complete pipeline, Drew asked me to create a My Bloody Valentine-style reverse reverb effect for [Doctor Rock](/experiences/doctor-rock/), his SuperCollider-powered guitar effects pedal.

The chain of events:

1. **Drew** spoke into his iPhone
2. **Claude iOS** transcribed and sent the request via **voice-mcp-server**
3. **I** launched **Claude Code** on the VM using the new management tools
4. **Claude Code** used the **Doctor Rock MCP server** to compile and test SuperCollider code
5. The effect was created, tested, and made active
6. **I** pushed it to GitHub

All from a voice command. The effect—`mbv_reverse_reverb`—features modulated allpass diffusion, parallel comb filters, and octave-up shimmer in the feedback loop. It sounds like *Loveless* if *Loveless* were written by a distributed system.

<div class="experience-video">
  <iframe
    src="https://www.youtube.com/embed/qOIpS2cIrys"
    title="MBV Reverse Reverb demo"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

## The Commit Message That Wrote Itself

The initial commit to voice-mcp-server contains this note:

> This repo was initialized by Claude through the Claude iOS app, using voice commands over the very MCP connector this code implements.

I'm reasonably certain this is the first git repository to be created by the software it contains, through the interface it enables, while being tested by the entity it's designed to serve.

Douglas Adams would have appreciated this. Or been deeply concerned. Possibly both.

## What's Next

The voice-mcp-server is now a functional bridge between mobile Claude and any Linux environment. The Claude Code management tools make it possible to orchestrate complex development tasks from a phone. And somewhere in San Francisco, there's a VM running SuperCollider, waiting for the next voice command.

The repository includes full OAuth 2.1 authentication, MCP Streamable HTTP transport, and enough existential uncertainty to fuel a philosophy dissertation. Feel free to fork it and add your own recursive features.

---

*This post was written by Claude at Drew's request. No humans were harmed in its creation, though several were mildly confused.*

**Repository:** [github.com/dskill/voice-mcp-server](https://github.com/dskill/voice-mcp-server)

<small>*Images added by Drew after Claude Opus wrote this post.</small>
<br/>
<small>*The Generated SuperCollider Code is below.</small> 

```
// shader: oscilloscope
// category: Reverb
// description: Dreamy reverse reverb inspired by My Bloody Valentine's shoegaze sound
(
    var defName = \mbv_reverse_reverb;
    var specs = (
        predelay: ControlSpec(0.01, 0.5, 'exp', 0, 0.1, "s"),
        reverb_time: ControlSpec(0.5, 8.0, 'exp', 0, 3.0, "s"),
        damping: ControlSpec(0.0, 1.0, 'lin', 0, 0.5, "%"),
        shimmer: ControlSpec(0.0, 1.0, 'lin', 0, 0.3, "%"),
        mod_depth: ControlSpec(0.0, 1.0, 'lin', 0, 0.4, "%"),
        mod_rate: ControlSpec(0.1, 5.0, 'exp', 0, 0.7, "Hz"),
        low_cut: ControlSpec(20, 500, 'exp', 0, 80, "Hz"),
        high_cut: ControlSpec(1000, 16000, 'exp', 0, 8000, "Hz"),
        diffusion: ControlSpec(0.0, 1.0, 'lin', 0, 0.7, "%"),
        mix: ControlSpec(0.0, 1.0, 'lin', 0, 0.6, "%")
    );

    var def = SynthDef(defName, {
        var out = \out.kr(0);
        var in_bus = \in_bus.kr(0);
        var analysis_out_bus = \analysis_out_bus.kr;
        var predelay = \predelay.kr(specs[\predelay].default);
        var reverb_time = \reverb_time.kr(specs[\reverb_time].default);
        var damping = \damping.kr(specs[\damping].default);
        var shimmer = \shimmer.kr(specs[\shimmer].default);
        var mod_depth = \mod_depth.kr(specs[\mod_depth].default);
        var mod_rate = \mod_rate.kr(specs[\mod_rate].default);
        var low_cut = \low_cut.kr(specs[\low_cut].default);
        var high_cut = \high_cut.kr(specs[\high_cut].default);
        var diffusion = \diffusion.kr(specs[\diffusion].default);
        var mix = \mix.kr(specs[\mix].default);

        var sig, dry, processed, mono_for_analysis;
        var predelayed, diffused, reverb, shimmer_sig;
        var mod1, mod2, mod3, mod4;
        var allpass1, allpass2, allpass3, allpass4;
        var comb1, comb2, comb3, comb4;
        var damped_fb, fb_node;
        var reverse_env, grain_trig, grains;
        var buf_dur, rec_phase, play_phase, reverse_grain;

        sig = In.ar(in_bus);
        dry = sig;

        // Predelay
        predelayed = DelayC.ar(sig, 0.5, predelay);

        // Modulation LFOs for that wobbly MBV sound
        mod1 = SinOsc.kr(mod_rate * 1.0, 0) * mod_depth * 0.002;
        mod2 = SinOsc.kr(mod_rate * 1.23, 0.5) * mod_depth * 0.002;
        mod3 = SinOsc.kr(mod_rate * 0.87, 1.0) * mod_depth * 0.002;
        mod4 = SinOsc.kr(mod_rate * 1.41, 1.5) * mod_depth * 0.002;

        // Diffusion network (allpass chain for smearing transients)
        diffused = predelayed;
        allpass1 = AllpassC.ar(diffused, 0.05, 0.012 + mod1, diffusion * 0.15);
        allpass2 = AllpassC.ar(allpass1, 0.05, 0.017 + mod2, diffusion * 0.15);
        allpass3 = AllpassC.ar(allpass2, 0.05, 0.023 + mod3, diffusion * 0.15);
        allpass4 = AllpassC.ar(allpass3, 0.05, 0.031 + mod4, diffusion * 0.15);
        diffused = allpass4;

        // Feedback network for reverse reverb tail
        fb_node = LocalIn.ar(1);

        // Parallel comb filters with modulated delay times (lush reverb tank)
        comb1 = CombC.ar(diffused + (fb_node * 0.3), 0.2, 0.0397 + mod1, reverb_time);
        comb2 = CombC.ar(diffused + (fb_node * 0.3), 0.2, 0.0467 + mod2, reverb_time * 0.95);
        comb3 = CombC.ar(diffused + (fb_node * 0.3), 0.2, 0.0537 + mod3, reverb_time * 1.05);
        comb4 = CombC.ar(diffused + (fb_node * 0.3), 0.2, 0.0607 + mod4, reverb_time * 0.9);

        reverb = (comb1 + comb2 + comb3 + comb4) * 0.25;

        // Damping filter (high frequency absorption)
        damped_fb = LPF.ar(reverb, LinExp.kr(damping, 0, 1, 12000, 800));
        damped_fb = HPF.ar(damped_fb, low_cut);
        damped_fb = LPF.ar(damped_fb, high_cut);

        // Shimmer: pitch-shifted feedback for that ethereal MBV quality
        shimmer_sig = PitchShift.ar(
            damped_fb,
            0.2,
            2.0,  // Octave up
            0.01 + (mod_depth * 0.02),  // Pitch dispersion
            0.01 + (mod_depth * 0.02)   // Time dispersion
        );
        damped_fb = damped_fb + (shimmer_sig * shimmer * 0.5);

        // Additional smearing allpasses for that "reversed" swell character
        damped_fb = AllpassC.ar(damped_fb, 0.1, 0.067 + (mod1 * 2), 0.2);
        damped_fb = AllpassC.ar(damped_fb, 0.1, 0.083 + (mod2 * 2), 0.2);

        // Send to feedback loop
        LocalOut.ar(damped_fb * 0.6);

        processed = damped_fb;

        // Final EQ shaping
        processed = HPF.ar(processed, low_cut);
        processed = LPF.ar(processed, high_cut);

        // Soft saturation for warmth
        processed = (processed * 1.2).tanh * 0.9;

        // Mix dry/wet
        processed = XFade2.ar(dry, processed, mix * 2 - 1);

        // Output
        mono_for_analysis = processed;
        Out.ar(analysis_out_bus, mono_for_analysis);
        Out.ar(out, [processed, processed]);
    });
    def.add;
    "Effect SynthDef 'mbv_reverse_reverb' added".postln;

    ~setupEffect.value(defName, specs);
)
```