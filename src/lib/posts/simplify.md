---
slug: simplify
title: simplify
date: 2022-02-19
excerpt: Compressing my SVG logo
tags: [design, code]
---

I simplified my logo a bit. It looks pretty much the same, but the underlying svg is much smaller.

I originally made the logo in Adobe Illustrator. I made the original path, then expanded it, then filled it in, then hid the original path. This left the svg with some unnecessary information.

I wrote the new version by hand. It's just a path with a stroke width and rounded joints and ends like you'd expect.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 14 14" xml:space="preserve">
	<path d="M4 2l8 5l0 6l-10-12l10 0l-10 12l0-6l8-5" stroke="#21326D" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
</svg>

The `viewBox` is like the canvas; it goes from (0, 0) to (14, 14). The actual path is a bit smaller, but I have to accommodate for the stroke width. I also gave some extra margin on the sides to make it a square, since I'm using this as a favicon and logo.

It starts at the coordinate (4, 2), then draws a line segment that's right 8 units and down 5 units. Then it goes straight down for 6 units, and so on.

I used Illustrator to export the image as different sized PNGs - ranging from 16 to 2048 pixels wide.

I tried to add the svg to this post, but WordPress doesn't let me do that - very lame.
