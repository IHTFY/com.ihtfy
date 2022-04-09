---
slug: hotel-tvs
title: Hotel TVs
date: 2022-01-11
excerpt: Hacking the hotel TV
tags: [hack, tutorial, experiment]
---

<script>
  import Image from "$lib/components/base/image.svelte";
</script>

I'm staying in a hotel right now. I carry an HDMI cable in my backpack so that I can watch YouTube, Netflix, etc. Hotels will often take measures to ensure you can't do that. This one had:

- Clean Remote with limited buttons
- A Samsung Hospitality TV with no external buttons
  - There is a remote receiver button, but this only does power
- Coaxial Cable Locks/Guards

The first step is to get the coax unplugged since the TV boots from this signal and runs a locked down OS.

<Image
  path="posts/{slug}"
  filename="20220110_193834-1"
  figcaption="lock back"
  alt="lock back"
/>
<Image
  path="posts/{slug}"
  filename="20220110_193827-1"
  figcaption="lock front"
  alt="lock front"
/>

## Coax Cable Lock

There lock was really just blocking access to the "nut". It spun freely and covered the connector. They had these on the TV end and at the wall.

<Image
  path="posts/{slug}"
  filename="20220110_193908-1"
  figcaption="wall lock"
  alt="wall lock"
/>
<Image
  path="posts/{slug}"
  filename="20220110_193924-1"
  figcaption="wall key"
  alt="wall key"
/>

## Wall Coax

All we need to do is wedge something between the nut and guard. I used a plastic knife first, but it broke on the TV end. A house key did the trick.

I plugged in my computer, and tried unplugging the TV to reset it. After a few minutes I turned it back on, but it was still trying to connect to the coax source and didn't find my HDMI source.

<Image
  path="posts/{slug}"
  filename="20220110_193753-1"
  figcaption="remote"
  alt="remote"
/>

## Reduced Function Remote

I ended up searching the TV model number and finding the manual. There was a code to get the TV out of hospitality mode. Typing in the code with the Clean Remote unfortunately didn't work, but I was able to find a menu that contained a way to switch sources. So in the end, I won.
