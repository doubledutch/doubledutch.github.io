---
slug: faq
date: 2019-01-01
title: 'Frequently Asked Questions'
description: 'Questions about DDDP for non-developers'
published: true
author: 'Adam Liechty'
banner: './banner.png'
---

# What is the DoubleDutch Developer Platform (DDDP)?

DDDP allows DoubleDutch customers and 3rd party developers to build extensions that can be installed
to any DoubleDutch event app.

# What is an extension?

An extension is a self-contained experience within a DoubleDutch app for attendees, possibly with an
administrator interface for Event Managers and Content Managers in the CMS.

In the app, attendees can navigate to extensions via the tab bar or “More” menu

![Nav Extensions](./nav-extensions.png)

![Trivia](./trivia.png)

Building extensions gives a high return on engineering investment, because they run on both iOS and
Android devices via [React Native](https://facebook.github.io/react-native/). Additionally, DDDP
provides a hosted Firebase store as an easy backend-as-a-service option.

Building extensions gives a high return on engineering investment, because they run on both iOS and Android devices via React Native. Additionally, DDDP provides some easy backend-as-a-service options.

# Can an extension access data from the rest of the app?

Extensions installed to an event have access to the same data that the rest of the DoubleDutch app
does, via the same access token for that attendee in the current event.

# Can an extension access data from a third party API?

Yes, although it is the responsibility of that API to secure its data appropriately. Extensions can
make web requests to external systems.

# What are some examples of extensions that have been built?

These will give you an idea of what is possible

- [Question & Answer](https://content.doubledutch.me/blog/increase-session-engagement-with-live-qa)
- [Personal Leads](https://content.doubledutch.me/blog/digitize-your-business-card-with-personal-lead-scanning)
- [Ice Breaker Espionage](https://content.doubledutch.me/blog/start-your-next-event-with-ice-breaker-espionage)
- [Trivia Challenge](https://customersupport.doubledutch.me/hc/en-us/articles/360004328793-Trivia-Challenge)

# How do event organizers install extensions to their events?

Event organziers use the DoubleDutch events Content Management System to manage their events. It
includes a store of extensions that can be installed to events with a single click:

![Extension Store](./store.png)
![My Info - Detail](./my-info-detail.png)
![Knowledge Share - Detail](./knowledge-share-detail.png)

# I have an idea for an extension...

Excellent! We have some questions for you:

1. Would the extension work as a separate app section that attendees can reach from the menu? If so,
   it may be a good candidate for a DDDP extension.
1. Would it require access to mobile device capabilities like accelerometers, health data, AR/VR
   capabilities, push messaging, or access to data from other apps? If so, DDDP unfortunately does
   not support these functionalities at this time.
1. Would the extension need to store data in a backend? No problem! We have deep [support for a
   zero-configuration data store](https://www.npmjs.com/package/@doubledutch/firebase-connector) in
   [Firebase](https://firebase.google.com/), with buckets of data protected within your events, and
   various access controls for attendees and Event Managers.
1. Do you have developers who can build it for you (with
   [React Native](https://facebook.github.io/react-native/) and optionally
   [Firebase](https://firebase.google.com/) Realtime Database skills)?
   1. “Yes”: Wonderful! Developers can get started [here, with videos and documentation](./getting-started).
   1. “No”: That’s okay! Reach out to your DoubleDutch Customer Experience Manager or Account Manager for help in finding a contract developer who can build it.