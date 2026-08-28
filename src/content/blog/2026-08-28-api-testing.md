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

In a previous life, I was lucky enough to be part of the development of a completely new eCommerce platform. Money was plentiful and the goal on the horizon was to supply the core business with a distribution channel for their products. The sky was the limit. 

The times were so plentiful, that every single previous decision was taken into question. UIs not modern enough or accesible were redesigned, working legacy APIs were torn down and rebuilt, established process definitions were re-invented and the decision was soon made to rebuild the whole rocketship we were aiming at the moon. 

Of course people were needed to compensate for the rising need for innovation and so they came. 

* Introduction/History
* Reality Check - what is really needed is Testing. Green fields often end in fast delivery push instead of rigorous testing. This is exactly the moment where the excitement overrules the thoughtfulness and strategic setup that an IT should accompany.
* Core business had hard requirements ->  Need for solid testing frameworks. Often overlooked by business who want to see results. Business needs to take this seriously, otherwise this doesnt scale and bites you later on. 
* More technical. User end2end flow from ui to backend is needed and involves rigorous testing setup . Everything that is automated scales well but has to be maintained.
* Overview of general testing setup. Two angles. By Quality attribute (what is tested) and by testing level (where does it happen). In the end, API testing performs the core business tests for a working ecommerce platform. UI tests can be integrated and automated, maybe even through Postman, but that secures the business and NFR requirements of a eCom platform. Manual tests remain later. 
* API testing acts as the sweet spot for business logic verification
* Overview of API testing capabilities in Postman by diagram and text

  * Postman owns contract, integration andcore business workflow validation. Postman playwright plugin handles reporting
* Assessment of what can be tested in Postman to secure a platform to what percentage.
* Different perspective: What manual maintantance means for this in terms of manual labor in comparison to manual testing when not automating. 
* What remains as manual tests and which it cant and should not be automated (UAT, parts of accessibility that does not fit into playwright)
* Technical peek of the highlvl integration of the testing setup in Postman and the reporting
* End: If business take this as a reading for their own playbooks before starting a new platform, they might be successful a little bit more.
