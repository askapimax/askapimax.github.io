---
title: Your Developer Portal Doesn't Need a Sprint, It Needs a Day
description: "TL;dr: Learn how to build a developer portal with Postman and Fern
  using Git-backed Collections and MDX. Ship docs in a day without SaaS fees or
  front-end work."
pubDate: 2026-10-12
author: Max
draft: false
hero: /uploads/jsonjet.png
tags:
  - Developer Portal
---
As a former [API Platform Lead & Product Owner](https://www.linkedin.com/in/m-friedrich/) I know how important an API developer portal is. It is more than a showcase for your APIs. A good portal pulls weight across the whole organization:

* It documents your API and makes it easier for other developers to discover and integrate, especially when you back it with SDKs and code examples.
* It accelerates internal and external onboarding, with contact forms, self-service for API keys, and guided onboarding flows.
* It acts as a notification center for API changes, from new versions to breaking changes.
* It serves as a single source of knowledge for developers and business analysts, which matters more as internal turnover increases.
* It makes your API products tangible for non-technical stakeholders and budget owners, who often have no other way to experience what the team is building.
* It advertises your company to technical B2B partners. Developers can tell at a glance whether an API program is a priority just by looking at the portal.

Knowing all of that, I learned the hard way that you have to allocate dedicated budget and capacity to build a developer portal. Usually, that capacity is only available during periods when the pressure to ship new APIs is not overruling delivery on the UI. A new API is almost always seen as more important to budget owners than a new website page, to put it bluntly. So the portal and the APIs end up competing for the same team capacity.

#### **But does that mean a developer portal has to be costly and maintained by a dedicated team? The answer is clearly no, but let me elaborate.**

It does not have to be that way. Besides pulling your own people into front-end work, the other option has always been a dedicated SaaS solution. It serves as a central CMS for a developer portal, but it requires procurement, onboarding, and very high license fees. Someone still has to maintain it on top of that. Spending 100k per year on a developer portal and keeping people busy maintaining it instead of building APIs never sat right with me. Luckily, we did not do that.

Being an API platform team meant supporting the complete API lifecycle, from ideation and design to implementation, testing, and maintenance, both internally and for external customers. We already relied on one tool for all of these chores so heavily that we did not initially think of it as the third option. [Postman](https://www.postman.com/) was by then already our source of truth for our collaboration, from design to test, to produce APIs and consuming them. Using it as a documentation tool for our API turns out to be the most efficient way to create a great showcase for our APIs without having to heavily modify your tech-stack. This is even more true since Postman acquired [Fern](https://buildwithfern.com/). Fern sits on top of existing Postman collections and generates Developer Portals with high customization potential, even for non-developers. (Full disclosure: I work at Postman.)

#### Let me walk you through what I think is the most efficient way to build a developer portal, using technology that is most likely already present in your company. It adds no new software. You simply use what you already own more efficiently, together with Fern.

![Overview of the high level process on deploying a developer portal through Postman and Fern](/uploads/postman_fern_portal_overview.svg "Overview of the high level process on deploying a developer portal through Postman and Fern")

The diagram above shows the high-level architecture of how your existing tech stack can deploy a fully functional developer portal. Your API team stays on the APIs, and you do not need an expensive SaaS solution. Postman most likely already sits on top of your existing [Git-backed API project](https://learning.postman.com/docs/use/native-git/overview). Fern then takes the existing Collections and specs, adds .mdx files for visuals, and publishes everything on a URL you can map to your own domain. 

I imagined a fictional airline called JSON Jet Airways. I asked Claude to do its best on the visuals for the website, and this is what came out in about an hour:

**[The JSON JET Developer Portal](https://json-jet.docs.buildwithfern.com/flight-status-api/introduction)**

**How did I do that?**

![Screenshot of the Postman Feature to publish a Fern documentation](/uploads/fern_upload.png "Publishing a Fern documentation from Postman")

Here is the path I took:

1. Create a Public Workspace in Postman with the [Git integration](https://learning.postman.com/docs/use/native-git/overview)
2. Update the Collection and Workspace documentation either manually or through the usage of [Postman Agent Mode](https://www.postman.com/product/agent-mode/)
3. Publish your collection documentation. Now there is a new feature for this in Postman: [Publish to Fern](https://buildwithfern.com/learn/docs/integrations/postman)
4. Register with Fern (as a free user to start). A GitHub repo gets created. Take ownership of this repo in the Fern dashboard. 
5. Inside the repo you will find an .mdx file (root/fern/docs/pages). Each of these files represents a website on your new developer portal.
6. Use your favorite AI agent to modify these mdx files

Here is an example of a .mdx file which is a mixture of markdown, javascript and css

```jsx
---
title: My Post
description: A short demo of MDX
---

import { useState } from "react"

# Regular markdown works here

You can write **normal markdown** and drop in live JSX whenever you need it.

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}

<Counter />
```

![Screenshot of Fern on taking the Git ownership](/uploads/fern_git_ownership.png "Taking the Git ownership of the created Fern repository")

![Diagram depicting the relation of individual websites on the developer portal and the underlying .mdx files](/uploads/mdx_files_to_portal_pages.svg "Diagram depicting the relation of individual websites on the developer portal and the underlying .mdx files")

The image above shows how the individual .mdx files, created by you or your favorite LLM, map to the resulting pages. Place them in the repository and connect them through a nav bar. That is all there is to it.

```yaml
navigation:
  - api: Flight Status API
    flattened: false
    layout:
      # hidden: reachable by direct URL and via the in-page nav bar, but kept
      # out of the API reference sidebar so it lists only the API itself.
      - page: Introduction
        path: docs/pages/introduction.mdx
        hidden: true
      - page: CheckIn Demo
        path: docs/pages/checkindemo.mdx
        hidden: true
      - page: Blog
        path: docs/pages/blog.mdx
        hidden: true

navbar-links:
  - type: minimal
    text: Home
    href: /flight-status-api/introduction
  - type: minimal
    text: API Explorer
    href: /flight-status-api/flight-status/get-flight-status
  - type: minimal
    text: Blog
    href: /blog
  - type: filled
    text: CheckIn Demo
    href: /checkin-demo
```

The longest part of this integration was waiting for Claude to finish the .mdx files. I also added front-end tests for the developer portal through Playwright, but that is a topic for another post.

The main problems this solves for me:

* Easy access for the whole team through Git and Postman Workspaces. Everyone who needs to publish content to the developer portal is already familiar with Git.
* The portal needs no dedicated owner to maintain it, so your API team can stay on the APIs.
* Let your favorite LLM do the automatic updating, documentation and sync tasks through the Fern MCP server
* No dedicated front-end work, and no $100k+ SaaS budget competing with your API roadmap.
* A fully functioning developer portal within one day.
* A Git-based workflow makes it straightforward to add CI/CD, branching, and automated tests later. Portal updates can live in the same workflow as your API changes, so the docs do not lag behind.

### One portal, two audiences: humans and AI agents

There is one more reason this setup held up over time. Developer portals are no longer read only by humans. Coding agents, RAG pipelines, and in-IDE assistants hit docs sites constantly, and most portals were not designed for that traffic. Fern was. The same site you just built for your team is already set up to serve AI agents well, without extra work from you.

A few things Fern does out of the box:

* Machine-readable entry points. Every site gets /llms.txt and /llms-full.txt at the root, generated automatically alongside robots.txt and sitemap.xml. llms.txt is a compact index; llms-full.txt embeds the full content. Appending /llms.txt to any page URL gives a page-level index.
* Markdown for every page. Append .md to any page URL and you get clean Markdown back. No scraping HTML, no stripping nav chrome.
* Bot detection that serves Markdown instead of HTML. When Fern detects an LLM bot, it serves Markdown directly. Fern reports this cuts token use by 90% or more, which matters when agents are paying per token to read your docs.
* Content tags for agent-specific output. <llms-only> shows content only to AI tools, <llms-ignore> hides content from them, and query parameters can filter output further (for example, by SDK language).
* Ask Fern, a RAG chat with citations. It runs in your docs, in Slack, and through an API you can embed in your own product.
* A hosted MCP server per docs site. Any site with Ask Fern enabled gets an MCP server at /_mcp/server. Claude Code, Cursor, and Windsurf can connect to it with one click. For authenticated sites, Fern recommends turning it off with mcp: false.
* Access for protected docs. Agents can get a JWT using a Fern API key, so they can read gated content and use search without blowing past your auth.
* Crawl and training control. Your own robots.txt still decides whether third-party tools can crawl or train on the content.

For teams building internal tools, you can also install a private MCP server scoped to your org (fern mcp install) that gives coding agents context on docs.yml, components, and CLI commands. And Fern Agent can edit docs, open PRs, and run on a schedule or from a Slack flow.

The short version: the same .mdx files powering your portal for humans are also the surface your API gets discovered through by every coding agent your partners and customers are using. You get both audiences from one build.

I wish someone had shown me this approach years ago. I hope it reaches you sooner. It is an efficient way to show your work to internal colleagues and the outside world without pulling your team away from what they are there to build: the APIs.
