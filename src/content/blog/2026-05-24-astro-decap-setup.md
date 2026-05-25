---
title: "Astro, Decap und ein ruhiger Workflow"
description: "Ein kurzer Blick auf das Setup: statisches Frontend, Markdown-Inhalte und ein CMS für unterwegs."
pubDate: 2026-05-24
author: "Max"
draft: false
hero: "/images/digital-garden.svg"
tags:
  - Astro
  - CMS
  - Workflow
---

Das Setup ist bewusst schlank: Astro rendert die Seite statisch, Decap CMS schreibt Markdown-Dateien ins Repository, und GitHub Pages veröffentlicht das Ergebnis.

Der angenehme Teil daran ist die Trennung der Aufgaben:

- Astro kümmert sich um Darstellung und Build
- Markdown bleibt das Datenformat
- Decap ist die Schreiboberfläche
- GitHub ist Versionskontrolle und Auslöser für neue Deployments

## Der wichtigste Vorteil

Die Seite funktioniert auch dann noch, wenn man später das CMS austauscht. Die Inhalte bleiben einfache Dateien. Das macht das Projekt robust und leicht migrierbar.

```txt
schreiben -> commit -> build -> online
```

So soll sich Publishing anfühlen: wenig Reibung, klare Kontrolle.
