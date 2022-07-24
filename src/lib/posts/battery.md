---
slug: battery
title: Battery
date: 2022-06-19
excerpt: I updated my drone batteries.
tags: [photography, random]
---

<script>
  import Callout from "$lib/components/base/callout.svelte";
</script>

# Drone Update

In my [Winter Drone](/winter-drone) post from the beginning of the year, I mentioned that I was having trouble updating my drone batteries' firmware. I booted up the drone today, and was able to update the app and firmware straightforwardly. Another problem that solved itself through procrastination.

It's strange how sometimes procrastination pays off.

I also learned that the batteries are designed to drain to storage capacity (30% or something) after 10 days. That means I should only charge them immediately before flying.

# Videos

I still haven't made any videos. I was working on making [a site](https://domination.ihtfy.com/) to play the Eight Queens Puzzle and the equivalents for the other pieces. You can also play the companion problem; the original is to place the maximum number of non-attacking pieces, but you can also try to place the minimum number of pieces to occupy or attack all squares.

There are still some features I could implement:

- Highlight covered squares on hover
- Highlight uncovered squares in Domination mode
- Highlight attacking pieces in Non-Attacking mode
- Save scores in local storage
- Show the differential between current, personal best, and best possible
- Generate all possible solutions (I've done this for some but not all)

I'd like to prioritize making the video, though.

<Callout type="info" date="2022-07-23">
2022-07-23

I added:

- sound effects
- highlighting attacking pieces and uncovered squares
- saving scores and settings in localstorage
- score differential between personal best and best possible

So the only thing I'm missing is generating all possible solutions... and the video.
</Callout>

# Ads

I added Google AdSense ads to most of my project sites. I opted to only use "anchor" ads - the kind that slide in from the top or bottom and and be collapsed. I find these to be the least invasive kind, since they're dismissable. I will probably remove these at some point, because I don't think they will ever generate substantial revenue.

I haven't promoted any of my sites other than posting on this blog and word of mouth. I suppose a YouTube video could lead some people there. I'll leave them for now and see.

The ads are designed for multi-page sites and not apps or single page sites. I'll only get 1 impression per visit, even if the person clicks and navigates all over the app for hours. Also, the ads on [Empire](https://empire.ihtfy.com/) almost never get fulfilled. I think it has to do with the css or something - maybe the navbar or sidebar. I tried commenting out components, but I couldn't get it working reliably.

# Hosts

To test out Google Ads when running a local dev server, I edit my hosts file. On Windows, it's at `C:\Windows\System32\drivers\etc\hosts`. I add `127.0.0.1 empire.ihtfy.com` to the bottom. And then when I start the server, I just go to `empire.ihtfy.com`. I can't remember if I have to add the port - I think I do, but only in the address bar in the browser - the host file is definitely just the base url and ip address.
