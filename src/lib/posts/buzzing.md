---
slug: buzzing
title: Buzzing
date: 2022-03-12
excerpt: The random buzzing phantom notifications are back.
tags: [random]
---

<script>
  import Image from "$lib/components/base/image.svelte";
</script>

The random buzzing phantom notifications are back. Nothing in notification history, and I haven't changed anything.

It may be an app accessing my location, but im not sure which one. When I look at the permissions log, none of the times kine up though.

In the permissions manager, you can sort by recently used permissions. I waited and caught the vibrating twice. Seems like Google Location is the culprit. I turned it off now, so hopefully it stops.

| <Image path="posts/{slug}" filename="screenshot_20220312-233340_permissionusage" figcaption="1st Buzz" alt="11:33"/> | <Image path="posts/{slug}" filename="screenshot_20220312-233502_permissionusage" figcaption="2nd Buzz" alt="11:35" /> |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |

I think the system update included vibrating when location is requested; I also notice a green dot in the top right corner when the camera is mic is in use.

Nope. Still happening.

Turned off notification reminders. We'll see.
