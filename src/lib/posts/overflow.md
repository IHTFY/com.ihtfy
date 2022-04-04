---
slug: overflow
title: "overflow"
date: "2022-02-21"
excerpt: 'TODO'
tags: [todo]
---

<script>
  import CodeBlock from "$lib/components/blog/code-block.svelte";
</script>

My sleep schedule is basically inverted again. I'm going to try to stay up until tomorrow night.

I'm a day ahead on my posts; I am enjoying this ability to schedule ahead.

I was watching [this Mathologer video](https://youtu.be/6ZrO90AI0c8) last night/this morning, and he asks people to create an app to visualize a modular times table. I think I'll play around with this a bit. [16:30](https://youtu.be/6ZrO90AI0c8?t=991) for the coding challenge.

## Goal

A comment from Mathologer:

- Being able to color line segments according to length.
- Being able to highlight different loops in different colors.
- Indication of the "direction" of multiplication. 1x2 = 2 and so there should really be a little arrow from 1 to 2 not just a simple connection
- different loops in different colors.

## Tools

I'll make a web app - probably a PWA, since it's all client-side and simple to add this functionality.

I'm going to use SVG rather than HTML canvas in case people want to zoom in on the details. I think I'll use [D3](https://d3js.org/).

I might use [MaterializeCSS](https://materializecss.com/), since it has a nice slider. Bulma doesn't have a slider, though there is an extension for it. Bootstrap could work, but I like the slider in Materialize better. The checkboxes in Materialize have really nice animations, and I think I'll be using those too to toggle options.

MaterializeCSS has never upgraded from v1.0.0, and I checked the GitHub page and see that there's a community edition [here](https://github.com/materializecss/materialize) - Nice! I'll be using that from now on (Edit: I just noticed their download page still links to the old version, so that's what I used... I just checked again, and the link is new; I don't know how I got the old version). I think I want to use the version with the SCSS files so I can customize the colors of the sliders etc, but I'll need to check how to use a SASS compiler. I've haven't set it up from scratch before. There's a VSCode extension called Live Sass Compiler that I'll try out - looks simple.

I think I'll download the minified version of the libraries I use and include them in my repository so that offline mode works.

Another idea: I might have themes for styling: Mathologer (white background), 3Blue1Brown (black background), Numberphile (brown paper background).

## Setup

I'll make a new folder called \`vortex\`. I'll download the latest version of [Materialize](https://materializecss.github.io/materialize/getting-started.html) and [D3](https://d3js.org/). Hmm, the download link for the SASS version of Materialize doesn't work, so I'll just get the regular version.

I'll make a new html file called `index.html` and insert the default html from [here](https://materializecss.github.io/materialize/getting-started.html#setup). I'm going to download those dependencies (icons) later so that everything is offline. I rearranged the file structure a bit, so I updated the relative paths in the `src` attributes. I'm also putting the `<script>` tags in the `<head>` and adding the `defer` attribute.

I'll try adding some [sliders](https://materializecss.github.io/materialize/range.html) to the page to make sure it's working. Yep, it works.

Now, I'll see if D3 is working by doing a "hello world". I make a file called `main.js` and add it as a `<script>` in the `index.html` head. Then, in `main.js` I save:

d3.select("body").append("span").text("Hello, world!");

It works. I'm going to save this in GitHub, and set up a public page. In VSCode, I can go to Source Control, then "Publish to GitHub". I'll make it a public repository called "vortex". [Here it is](https://github.com/IHTFY/vortex). To make a page for it on GitHub, I go to Settings > Pages > set Source to Master > Save. Now it's public at https://ihtfy.github.io/vortex/. To give it a custom URL, I'll add a file in the root of the project called `CNAME` with the text \`vortex.ihtfy.com\`.

I also need to set it up in my DNS settings for ihtfy.com. I'll add a CNAME record with a hostname of `vortex.ihtfy.com` and use `ihtfy.github.io.` as the data. Finally, in the GitHub Pages settings, I'll add `vortex.ihtfy.com` as a Custom Domain. In a minute or so, I can also enable HTTPS.

Now, I can start implementing the actual meat of the project.

## Starting

The sliders should set values called "multiplier" and "modulus". I'll also link them to a number/text input, so you can easily type in a specific number. I just learned about `.labels`, which [finds the associated label](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels) for an input element.

I modify the "hello world" a bit to draw a circle:

<CodeBlock lang="javascript" filename="main.js">

```javascript
const svg = d3.select('#display');
svg
  .append('circle')
  .attr('cx', '50%')
  .attr('cy', '50%')
  .attr('r', 100)
  .style('fill', 'none')
  .style('stroke', 'black');
```

</CodeBlock>

I already added an `<svg>` element to the html file.

I'll set a default size for the svg element and play around to get things centered and sized up correctly.

I'm using Materialize's grid to make the columns resize as the screen size changes.

Now, I need to place evenly spaced dots around the circle.

## Jumping Ahead

I forgot I was documenting what I was doing. You can see the history from [my commits](https://github.com/IHTFY/vortex/commits/master), but it's probably best to just look at the final code once I'm done.
