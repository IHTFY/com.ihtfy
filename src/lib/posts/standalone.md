---
slug: standalone
title: Standalone
date: 2022-01-10
excerpt: Making Empire an installable app
tags: [code, gaming]
---

<script>
  import Image from "$lib/components/base/image.svelte";
</script>

Today I made [Empire](https://empire.ihtfy.com/) a PWA, which means you can install it on your phone or computer as an app. I've made a PWA before, [Optics](https://optics.ihtfy.com/), but it was harder to get it to work this time around. Some of the difficulty came from forgetting to either clear the browser cache or restart the dev server. But in the end I got it working.

I disabled overscrolling (pull to refresh/forward/backward) since that can mess up the game. I decided to keep zooming enabled for now. In the future I may try to conditionally allow navigation if in the browser versus in the PWA.

I noticed that different mobile browsers handle the PWA differently, namely the color of the status bar, the background color of the icon when the app is sleeping. If you install via Brave it doesn't install through the Play Store, so there is a browser icon in the corner of the app shortcut. Also, the Play Store version doesn't acknowledge the Brave version and vice versa.

Below are screenshots of the Empire PWA installed from Chrome, Brave, and Samsung Internet, respectively.

## App Icons

<Image
  path="posts/{slug}"
  filename="20220109_213508"
  figcaption="Brave shows a badge on the app icon"
  alt="Brave shows a badge on the app icon"
/>

## Opening App

Only Chrome shows the theme color in the status bar. I think brave and SI abide by my phone's dark mode (I do not have Force Dark Mode enabled in Android dev).

<Image
  path="posts/{slug}"
  filename="20220109_213524"
  figcaption="Loading Screen"
  alt="Loading Screen"
/>

## In the App

Only Chrome uses the background color in the status bar.

<Image
  path="posts/{slug}"
  filename="20220109_213541-1"
  figcaption="In the app"
  alt="In the app"
/>

## In the Background

Chrome correctly uses the background color in the icon.

<Image
  path="posts/{slug}"
  filename="20220109_213558"
  figcaption="App in a different tab"
  alt="App in a different tab"
/>

## Conclusion

Overall, I would recommend using Chrome on Android to install PWAs. One "downside" is that there's a persistent notification that allows you to open the app in Chrome.

<Image
  path="posts/{slug}"
  filename="screenshot_20220109-210849_chrome-edited"
  figcaption="Chrome notification"
  alt="Chrome notification"
/>