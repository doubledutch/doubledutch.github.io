---
slug: publishing-installing
date: 2017-09-22
title: 'Publishing and Installing Extensions'
description: 'Use your extensions in DoubleDutch event apps'
published: true
author: 'Adam Liechty'
---

## Publishing your DoubleDutch extension

Once you have finished development, you will need to be provisioned for a DoubleDutch developer account
before you can publish and install the extension in an event app. To request your developer credentials,
please submit a request [here](https://developer.doubledutch.me/hc/en-us/requests/new).

Next, use your developer credentials to authenticate via the `doubledutch` command line tools:

```bash
doubledutch login
```

You may now publish your extension to DoubleDutch

```bash
doubledutch publish
```

To update an extension you have already published, first update the version number in the `package.json`
file at the root folder of your project. Then, updating an extension is as simple as publishing again.

## Installing your extension to an event in a DoubleDutch event app

An Event Manager in the DoubleDutch CMS can install published extensions via the "Discover More" page in the CMS.
Many extensions are public and appear for all CMS users. Any non-public extension can be installed with the exact
published name of the extension (case-sensitive):

1. Visit the "Discover More" page in the DoubleDutch CMS
1. Click the "Custom DDDP extension" tile at the bottom of the page and click the "Add Custom" button.
1. Enter the exact published extension name, hit `enter`, and refresh the page.
1. Click "Install Now" on the new extension tile that appears.
1. The extension will be installed to the current event in the DoubleDutch CMS and saved as a tile in your personal
   "Discover More" page for later access.