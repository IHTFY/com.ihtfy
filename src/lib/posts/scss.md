---
slug: scss
title: SCSS
date: 2022-04-04
excerpt: I've been changing the color palette for the new site.
tags: [website]
---

I've been changing the color palette of the themes. Kind of made a mess, but got it sorted out. I wasn't very familiar with how sass uses rgb variables and the `rgb()` and `rgba()` functions. There doesn't seem to be a clean way to modify the alpha of a variable color.

Some docs said you can just use the rgb color as the 1st argument and the alpha as the second in a `rgba()` but that doesn't work, unless you simply have the 3 values as the variable, not the actual color. But then you need to convert those numbers anywhere else you need to use the color. So you either need multiple variables, or you're using `rgb()` and `rgba()` at every instance.
