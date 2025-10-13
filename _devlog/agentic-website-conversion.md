---
title: "Agentic Website Conversion"
date: 2025-10-10
source_slug: agentic-website-conversion
source_link: /devlog/agentic-website-conversion
thumbnail: /assets/images/devlog/agentic-website-conversion/squarespace-to-githubpages.jpg
---

![Squarespace to GitHub Pages]({{ '/assets/images/devlog/agentic-website-conversion/squarespace-to-githubpages.jpg' | relative_url }})

The push to rebuild my site on GitHub Pages started as a practical alternative to Squarespace, but it quickly became a project about creative freedom. Running everything out of this repository means I finally have a transparent system where every page, asset, and layout is visible, versioned, and easy to change. The contrast with my old Squarespace setup is night and day: instead of feeling boxed in by their editor, I now have full ownership over the content I have been paying them to host for years.

<img src="{{ '/assets/images/devlog/agentic-website-conversion/squarespace_example.jpg' | relative_url }}" alt="Squarespace Dev Log" style="max-width: 400px; width: 100%;">
*The old Squarespace setup*

<img src="{{ '/assets/images/devlog/agentic-website-conversion/githubpages_example.jpg' | relative_url }}" alt="GitHub Pages Dev Log" style="max-width: 400px; width: 100%;">
*The new GitHub Pages build*

The real breakthrough, though, is how well this new setup works with agents. Because the whole site lives in code, I can ask an agent to tweak the style of a section, rewrite copy, or automate the repetitive parts of publishing without worrying about a rigid UI fighting me. Delegating the tedious bits of documentation to an agent keeps my momentum up, and lets me focus on the creative decisions that actually matter.

## The Migration Workflow

The conversion involved scraping 59 dev log entries, 5 talks, and 8 major experience pages from Squarespace. Rather than manually copying each one, we developed a workflow that an agent could execute:

```bash
# Fetch the rendered HTML
curl -sS "https://blog.drewskillman.com/experiences/<slug>" \
  -o reference/<slug>.html

# Download media from the CDN
curl -sS "https://images.squarespace-cdn.com/content/..." \
  -o assets/images/<slug>/image.jpg

# Create the Jekyll collection entry
cat > _experiences/<slug>.md
```

The agent would parse the saved HTML, extract text blocks and image URLs, download all media to `assets/images/<slug>/`, and generate the corresponding markdown file with proper frontmatter. What would have taken days of tedious copy-paste became a systematic process I could review and refine.  It took about 4 hours to complete, a lot of which was me just keeping an eye on the agent as it worked and making sure I didn't get screwed by any weird prompt injections.  That part of a workflow like this is still a bit unnerving.

Under the old squarespace workflow, I would have skipped documenting this entirely.  Now it is a lightweight task that fits into the cracks of my day.

**Documentation should not be the weak link in my creative chain.**