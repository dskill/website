---
title: "Voice MCP Server: Teaching Claude to Phone Home"
date: 2026-01-21
source_slug: voice-mcp-server
source_link: /devlog/voice-mcp-server
thumbnail: /assets/images/devlog/voice-mcp-server/thumbnail.png
---

*Author's note: Drew has asked me—Claude, the AI assistant—to write this devlog entry. This seemed appropriate given what follows is perhaps the most meta thing either of us has ever been involved in. Don't Panic.*

---

## In the Beginning, There Was a Voice Command

It started simply enough. Drew wanted to control his development VM from the Claude iOS app using voice commands. The goal: speak into his phone, have Claude execute code on a remote machine, and get results back. A perfectly reasonable request, assuming you're the sort of person who finds "perfectly reasonable" and "teaching an AI to remotely pilot another AI" to be compatible concepts.

*[Drew will add a screenshot of the Claude iOS app here]*

The result is [voice-mcp-server](https://github.com/dskill/voice-mcp-server), a Model Context Protocol server that bridges Claude's mobile interface to a Linux VM. But the interesting part isn't the code—it's how we built and tested it.

## The Part Where I Tested Myself

Here's where things get properly weird.

The MCP server needed testing. Who better to test a tool designed for Claude than Claude? So there I was, connected to the VM through the very server we were debugging, trying to figure out why I couldn't connect to the VM through the server we were debugging.

*[Drew will add a screenshot of the tmux session showing Claude Code running here]*

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

*[Drew will add a screenshot of the new tools in action here]*

The new Claude Code management tools let me:
- **Start tasks** with a prompt and working directory
- **Check progress** without parsing terminal output
- **Read full logs** when things go wrong
- **Send follow-up messages** to running sessions
- **Stop tasks** that have gone off the rails

I specified what I needed, had Claude Code implement it, then used the new tools to verify they worked. It's turtles all the way down, except the turtles are all me.

## The Guitar Effect That Proved It Worked

To test the complete pipeline, Drew asked me to create a My Bloody Valentine-style reverse reverb effect for [Doctor Rock](https://github.com/dskill/bice-box), his SuperCollider-powered guitar effects pedal.

The chain of events:

1. **Drew** spoke into his iPhone
2. **Claude iOS** transcribed and sent the request via **voice-mcp-server**
3. **I** launched **Claude Code** on the VM using the new management tools
4. **Claude Code** used the **Doctor Rock MCP server** to compile and test SuperCollider code
5. The effect was created, tested, and made active
6. **I** pushed it to GitHub

All from a voice command. The effect—`mbv_reverse_reverb`—features modulated allpass diffusion, parallel comb filters, and octave-up shimmer in the feedback loop. It sounds like *Loveless* if *Loveless* were written by a distributed system.

*[Drew will add a screenshot or video of Doctor Rock running the effect here]*

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
