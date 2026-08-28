---
title: API Testing
description: "TL;dr: "
pubDate: 2026-08-28
author: Max
draft: true
tags:
  - Note
---
In the beginning, there was milk and honey, so they say...

In one of my previous roles, we developed a completely new eCommerce platform from scratch. Money was plentiful and the goal on the horizon was to supply the core business with a distribution channel for their products. The sky was the limit. 

The times were so plentiful, that every single previous decision was taken into question. UIs not modern enough or accesible were redesigned, working legacy APIs were torn down and rebuilt, established process definitions were re-invented and the decision was soon made to rebuild the whole rocketship we were aiming at the moon. 

Of course people were needed to compensate for the rising need for innovation and so they came. 

* ~~Introduction/History~~
* Core business had hard requirements ->  Need for solid testing frameworks. Often overlooked by business who want to see results. Business needs to take this seriously, otherwise this doesnt scale and bites you later on. 
* More technical. User end2end flow from ui to backend is needed and involves rigorous testing setup . Everything that is automated scales well but has to be maintained.
* Overview of general testing setup. Two angles. By Quality attribute (what is tested) and by testing level (where does it happen). In the end, API testing performs the core business tests for a working ecommerce platform. UI tests can be integrated and automated, maybe even through Postman, but that secures the business and NFR requirements of a eCom platform. Manual tests remain later. 
*
