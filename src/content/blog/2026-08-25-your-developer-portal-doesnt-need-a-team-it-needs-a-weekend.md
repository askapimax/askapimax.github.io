---
title: Your Developer Portal Doesn't Need a Dedicated Team, It Needs a Weekend
description: "TL;dr: Building an API developer portal does not require a full
  development team anymore. With AI and frameworks like Fern, designing,
  building, testing and deploying a developer portal on top of an existing API
  requires no more than a day. "
pubDate: 2026-08-25
author: Max
draft: true
tags:
  - DeveloperPortal
---
As a former API Platform Lead/Product Owner I knew of the importance of an API developer portal. It is not only a showcase for your APIs, it actually serves various independent purposes:

* It documents your API, making the API (hopefully) easy to discover and integrate for other developers. This can be supported with SDKs or code examples
* It can serve as a notification center for changes to your APIs, like new versions, breaking changes or new functionality
* Often overlooked by business departments: A developer portal serves as advertisement for technical B2B partners of your company. Developers can clearly identify if an API program is of high priority for a company just by looking at it
* It accelerates your internal and external onboarding, especially when integrating contact forms, self-services for API keys or onboarding processes
* It serves as a single source of knowledge for your team's developers and business analysts to collect their gained business and technical knowledge. This becomes especially important with higher internal team turnover
* It connects non-technical stakeholders to the development process and serves as showcase. A developer portal is a great way to make API products tangible for all sorts of stakeholders
* It showcases your APIs to your budget owners and justifies your expenses. Depending on the technical expertise of your superiors, a developer portal can sometimes be the only way to experience API products without having to understand code
* It can serve as an internal testing tool for internal manual testers or business analysts
* It can serve as a monitoring tool for your partners to check on their usage and quota
* It can serve as a support dashboard for your customers when contacting you via the platform

Knowing that, I learned the hard way that it is mandatory to acquire dedicated budget and capacity for the implementation of a developer portal. Usually this capacity can only be held in times when the business pressure to build new APIs was not overruling the implementation capacity for the UI. A new API is usually regarded as more important to the budget owners than a new shiny website page, to put it polemically. 

#### **But does that mean that a developer portal has to be costly and maintained by a dedicated team? The answer is clearly no, but let me elaborate.**

The second option besides hiring dedicated front-end staff was always spending a lot of money for a dedicated SaaS solution that would serve as central CMS for a developer portal, requiring procurement, onboarding and usually most importantly, very high license fees plus an additional person to maintain. 

#### **The second question to answer was if our company was willing to spend $100k+ a year just for a developer portal to save on 1-2 front-end jobs. Luckily we did not do that.**

Becoming a solution engineer at Postman opened my eyes and I am not trying to advertise licenses at this point. It really showed me the fundamental ease of publishing a developer portal through a very intuitive and easy framework. Let me depict:

![Overview of the high level process on deploying a developer portal through Postman and Fern](/uploads/postman_fern_portal_overview.svg "Overview of the high level process on deploying a developer portal through Postman and Fern")

**The result: [The JSON JET Developer Portal](https://json-jet.docs.buildwithfern.com/flight-status-api/introduction)**

**Let me show you how I did that.**

The required steps can be broken down into the following:

1. Create a Public Workspace in Postman with [Git integration](https://learning.postman.com/docs/use/native-git/overview)
2. Update the Collection and Workspace documentation either manually or through the usage of the [Postman Agent Mode](https://www.postman.com/product/agent-mode/)
3. Publish your public collection documentation. Now there is a new feature for this in Postman: Publish to Fern

   ![Fern Documentation publishing ](/uploads/fern_upload.png "Publishing the Collection Documentation to Fern")
4. Register with Fern (as a free user to start). Now a GitHub repo gets created. Take ownership of this repo in the Fern dashboard. 
5. Inside the repo you will find an .mdx file (root/fern/docs/pages). Each of these files represents a website on your new developer portal.
6. Use your favorite AI agent to modify these mdx files

![](/uploads/mdx_files_to_portal_pages.svg)

This integration took me about 1-2 hours where the longest part was to wait for Claude to finish the .mdx files. Lastly I integrated front-end tests for the developer portal through Playwright, but this will be the topic of another post later on.

The main problems this solves for me:

* Very quick setup of a fully functional developer portal including an API explorer, Blog, Welcome Page and demo page
* Easy access for the complete team via Git. Everyone who needs to publish content to the developer portal is already familiar with Git
* Super fast deployment of a front-end CI/CD pipeline with workflows
* Great visual potential through the usage of .mdx files with CSS and JS included
* Postman MCP and GitHub MCP make deployment really easy
* The source of truth stays within Postman. A change to a spec or collection directly deploys to your developer portal
* Playwright tests are fully integrated (later blog post) to ensure functionality throughout further deployments
* One person is enough to maintain a developer portal
