---
slug: tabs
title: Tabs
date: 2022-01-09
excerpt: Adding navigation to Empire
tags: [code, gaming]
---

<script>
  import Callout from "$lib/components/base/callout.svelte";
</script>

I added some changes to my [Empire](https://empire.ihtfy.com/) game; most noticeably, navigation tabs. I also added a button to peek at your secret nickname, and I added some color and avatars to the Lobby. Adding the tabs was actually a bit complicated since the logic flow of the game relied on it being impossible to go back and resubmit forms, etc.

My family played over Christmas, and it worked pretty well. My sister said she played it again with her in-laws, and they had fun too. Hopefully everyone will enjoy the little improvements I made.

The whole game could use a visual makeover, namely a consistent color palette. There's also a glitch when going to the 2nd tab on mobile: the client size gets larger than the screen/html/body. Clicking the share link fixes one of the overflow directions, and going to another tab and back eliminates it. I think it may be an issue with [materializeCSS](https://materializecss.com/), but I'm not sure.

<Callout type="info" date="2022-01-09">
2022-01-09

I noticed the label was extending past the edge of the screen. I think there's an issue calculating its size since it has a transition. I just hid the overflow on the parent element - `.input-field`
</Callout>

I started making the site years ago, before I was comfortable using a framework or even npm packages. I mainly wanted to try using a database and cloud functions using firebase, which I think I accomplished. Since then, I've used [Svelte](https://svelte.dev/) to make a [card game](https://optics.ihtfy.com/), React on another game I'm working on with a friend, and I also played around with [Preact](https://preactjs.com/).

I've used plenty of npm packages in my projects too. Some projects were intended to become tutorial videos, so I like using CDNs because they keep the codebase small and setup simple which is nice for explainers.
