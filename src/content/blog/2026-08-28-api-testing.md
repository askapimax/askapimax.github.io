---
title: API Testing
description: "TL;dr: "
pubDate: 2026-08-28
author: Max
draft: true
hero: /uploads/chatgpt-image-aug-28-2026-02_39_36-pm.png
tags:
  - Note
---
In the beginning, there was milk and honey, so they say...

In a previous life, I was lucky enough to be part of the development of a completely new eCommerce platform. Money was plentiful and the goal on the horizon was to supply the core business with a distribution channel for their products. The sky was the limit. 

The times were so plentiful, that every single previous decision was taken into question. UIs not modern enough or accessible were redesigned, working legacy APIs were torn down and rebuilt, established process definitions were re-invented and the decision was soon made to rebuild the whole rocketship we were aiming at the moon. Of course people were needed to compensate for the rising need for innovation and so they came. 

The project started very strong, everyone had the highest hopes and put immense energy into their artifacts. User stories were written, developers playfully fought for the right to take on the most innovative user stories and timelines were held. This is exactly what turned out to be the problem, which was not the ambition of our developers, it was the pure scale in which features left the production chain without thoughtful automatic testing. Manual testers tried to keep up with the amount of testing artifacts and we soon threw test automation engineering capacity on the project but without a strategic battle plan, the endeavor was foreseeably short.

The reality check came pretty soon and this is the lesson that everyone of us heard before but was naive enough to think that it would not hit us:

**Software testing is no commodity. A software testing strategy and automatic testing is the absolute foundation of any scaling modern software platform. Software testing and rigorous planning must and can not be omitted. Period.** 

Automatic software testing does not produce tangible business results. In fact the absence of a testing strategy and automation project leads to very tangible negative results. It is in the nature of every human being to avoid fears and work towards positive rewards. Even more so the need for every project manager , CTO or product manager should be very clear to invest in a testing framework should be clear. If the business objectives can't be held because the software quality is not on par with the business demand, no revenue can be generated and technical debt increases, which is directly related to financial debt and thus, to a reduction in revenue. 

Ad-hoc testing may work for a single scrum team with a limited project scope but in an agile context, where the majority of people produce interconnected software components, things that worked manually before, just don't scale up. 

After setting the historical scene and putting you in my imaginary shoes, I want to show you my understanding of software testing for scaling platforms and show you some shortcuts I think are reasonable to take, which focus on the aspect of API testing for logical business verification. 

Software tests generally can be viewed form two distinct angles:

1. Software testing by testing level (what and how are we testing)
2. Software testing by quality attribute (what metric are we testing on)

Lets first look at the tests from the testing level perspective:

| **Testing Type**        | **Description**                                                                                                | **Automation** **Potential**                                                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit Testing            | Tests a single function or class in isolation                                                                  | Fully automated per se. Can run as part of a CI/CD                                                                                                                                                              |
| Integration Testing     | Tests the integration of two or more components                                                                | Full automation potential. Can run as part of a CI/CD                                                                                                                                                           |
| Contract Testing        | Whether a service adheres to the specified request / response schema                                           | Full automation potential. Can run as part of a CI/CD                                                                                                                                                           |
| E2E Testing             | Tests the full application end to end, often from the ui to the backend, also often including all dependencied | Mixed but possible. UI tests can be automated through frameworks like Playwright but can be flaky and slower sometimes. But once successfully automated, this is the holy grail of testing and scales very well |
| Smoke Testing           | Tests a handful of critical testing paths to ensure "the core business flows did not break".                   | Full automation potential. Can run as part of a CI/CD                                                                                                                                                           |
| Sanity Testing          | A very narrow, very quick change on a specific area to ensure functionality                                    | Full automation potential. Can run as part of a CI/CD, but often a quick manual test as automation often isn't worth the time investment                                                                        |
| Regression Testing      | Checks the business functionality of an application after a change                                             | Ideally fully automated and high potential but higher maintenance effort. Can and should run as part of a CI/CD. Should cover also non critical business paths.                                                 |
| User Acceptance Testing | Tests the expected user behavior of a system.                                                                  | Per definition a manual test that real users sign off, which is the point of this test                                                                                                                          |

That is quite a view different spots to test on but luckily that is no workload for one testing job. The individual test types scale very well throughout the team's individual roles. While unit tests are typically implemented by engineers during implementation or even by an AI, E2E tests are typically designed and implemented by test engineers with the help of business experiences staff with knowledge of the complete architecture. Regression tests are typically designed by business analysts and implemented by either themselves, test engineers, AI or developers and user acceptance tests are usually done by the business departments whom the delivery is aimed at. This is their way of ensuring they get what they paid for. 

So now we know what and how we can test but it is important to get to know metric specific tests that don't test the overall functionality of a system based on business flows, but depending on specific testing metrics. These are often, but not exclusively, non functional aspects. These are:

| **Testing Type**      | **Description**                                                                                                                                                         | **Automation Potential**                                                                                                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Performance Testing   | Checks the performance of a system under load and extreme traffic                                                                                                       | Mixed to high. Performance tests can be automated but adjusting threshold and maintaining the tests depending on the expected traffic is usually a manual task. Can run as part of a CI/CD                                                        |
| Security Testing      | Checks systems for security vulnerabilites                                                                                                                              | 50/50. Static and dynamic code analysis can be fully automated and be part of a CI/CD. Penetration testing on the other hand is a manual task and usually done by specialists. But it is to say that AI solutions for this are also on the rise.  |
| Usability Testing     | Checks if a system can be used by human beings without friction. A new version of this is also coming: Usability testing for AI agents. Probably part of a later post.  | Mostly fully manual and done by real humans. AI can help on this aspect but not yet fully cover all parts of it.                                                                                                                                  |
| Accessibility Testing | Checks if the system works for people using assistive technology, which is mandatory in the EU.                                                                         | Mixed. Automated linters catch a big portion of issues, but screen reader walkthroughs still need a person                                                                                                                                        |
| Compatibility Testing | Checks if a system behaves coherently across different usage environments (like browsers or operating systems)                                                          | Mixed. Grids like BrowserStack or Selenium Grid automate execution, but visual review often still needs a human eye                                                                                                                               |
| Exploratory Testing   | Unscripted often scenario based testing to catch what automated tests didn't find.                                                                                      | Manual by definition. If it was scripted, it could be automated                                                                                                                                                                                   |

* intro /historical context
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
