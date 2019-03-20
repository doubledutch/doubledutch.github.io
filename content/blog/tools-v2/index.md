---
slug: tools-v2
date: 2019-03-20
title: 'DDDP Version 2.0 Released'
description: 'Set up tools and build your first DoubleDutch extension'
published: true
author: 'Adam Liechty'
banner: './banner.png'
---

We are excited to announce version 2.0 of the DoubleDutch Developer Platform!

We've made some improvements to the development tools and process, which will speed your development
time and provide access to the latest features React and React Native have to offer.

# Getting started

1. `npm i -g @doubledutch/cli@latest` to get the latest `doubledutch` command-line interface.
1. Set up the [DoubleDutch simulator](https://github.com/doubledutch/simulator) app for either iOS
   or Android.
1. Use `doubledutch init` to clone a sample project and get started.
1. Launch the `mobile` and/or `web/admin` folder projects with `npm start` to run locally.

# Major changes

The version 2.0 tools make several important changes.

1. Your extension code base no longer needs iOS and Android project files. You can develop multiple
   DoubleDutch extensions with the same
   [DoubleDutch Simulator](https://github.com/doubledutch/simulator) app.
1. Built on React Native 0.59, which includes many feature, stability, and security enhancements.

# Upgrading from version 1

To upgrade from the DDDP v1 tools:

1. `npm i -g @doubledutch/cli@latest` to get the latest `doubledutch` command-line interface.
1. Set up the [DoubleDutch simulator](https://github.com/doubledutch/simulator) app for either iOS
   or Android.
1. Update your existing DDDP extension with `doubledutch upgrade-rn`.
1. Launch the `mobile` and/or `web/admin` folder projects with `npm start` to run locally.
