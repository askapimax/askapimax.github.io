---
title: "Astro, Decap, and a Quiet Workflow"
description: "A quick look at the setup: static frontend, Markdown content, and a CMS for writing on the go."
pubDate: 2026-05-24
author: "Max"
draft: false
hero: "/images/digital-garden.svg"
tags:
  - Astro
  - CMS
  - Workflow
---

The setup is intentionally lean: Astro renders the site statically, Decap CMS writes Markdown files into the repository, and GitHub Pages publishes the result.

The nice part is the separation of responsibilities:

- Astro handles presentation and builds
- Markdown stays the content format
- Decap is the writing interface
- GitHub is version control and the deployment trigger

## The main advantage

The site still works if the CMS changes later. The content remains plain files, which makes the project robust and easy to migrate.

```txt
write -> commit -> build -> publish
```

That is how publishing should feel: low friction, clear control.
