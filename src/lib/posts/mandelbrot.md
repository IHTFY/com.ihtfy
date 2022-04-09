---
slug: mandelbrot
title: mandelbrot
date: 2022-03-07
excerpt: Updating the description of my Mandelbrot fractal viewer
tags: [math, code]
---

In my [fractal post](https://frankiemercado.com/2022/01/27/fractal/), I mentioned I need to fix my mandelbrot fractal viewer. I still need to do this; I'd like to get the original paper's method to work. The current version is based on a shadertoy example which relies on picking a cyclic point as reference.

I just changed the README on github, because I think I messed up saying 16-bits and 16-digits. I also noticed a source saying one of the 53 bits is actually for signature. I thought that was part of the 11. I think the exponent part is still wrong, but I'm not sure - need to see when things are in base 2 versus 10.

I kind of gave up on it for a while because [Kalles Fraktaler](http://www.chillheimer.de/kallesfraktaler/), works so much better and faster and includes lots of other optimizations, glitch fixes, and styling options.
