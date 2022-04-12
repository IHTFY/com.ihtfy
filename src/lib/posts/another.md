---
slug: another
title: Another
date: 2022-02-23
excerpt: Redesigning my website
tags: [code, website, design]
---

I'm still stuck on the MDSveX/prismjs error. I found [another site](https://github.com/elianiva/elianiva.my.id) that uses sveltekit. It's hosted on vercel, but I wonder if it will work if I just change the adapter to static in `svelte.convig.js`.

That worked. I think I'll use this as a starting point for now.

Just kidding. Same kind of problem, but showing different errors. When I open a blog it gives an error. But if I refresh, I can navigate back and forth and see all posts without problem.

So, if I refresh I can't go to a post the first time. Actually, now it's not working at all. And now it's working completely. I don't know what's happening - maybe browser caching something? Seems to work now, so I'll move forward.

I'm going to see if I can host this page on GitHub with a custom url. I've had problems with routing before, so I think it's worth testing early. I'll install `gh-pages` to my developer dependencies using:

`npm install gh-pages --save-dev`

And I'll add a script to `package.json` called `deploy` that runs:

`gh-pages -d build`

Now, let's see if it will host on the default GitHub url. I think I need to check in the whole repository first, because I don't think gh-pages will create a new one.

It's mostly working now, but it's looking for assets in BASEURL/... vs BASEURL/REPONAME?..., but I think that means it will work if I just use ihtfy.com or even a subdomain like blog.ihtfy.com.

It's not working, but I forgot to add a `.nojekyll` file to the root. I'll add it in the `/static` directory and rebuild. Apparently, Jekyll doesn't post files or directories that start with an underscore.

GitHub or gh-pages keeps deleting my `.nojekyll` file. I tried adding some test inside, but that didn't help. I have to manually add the file back in through GitHub.

If I open the site in a private window, it doesn't load the css. If I then hard refresh, it works. But if I do a normal refresh it doesn't. Ah, just saw that I had another browser window open so the private session never ended. The refresh stuff is gone now.

I just tried the old starter project again and noticed the build preview is working, but not the dev. Who knows...

## Comparison

There are some things I like from the different sites.

From Matt's:

- SVG animations - Background and logo
- Hover animation on posts (but they're not on the other cards)
- Smooth scrolling
- Code can show filename and language
- Custom highlighting (sparkle wrapper and brush stroke)
- Featured image for posts
- Different shaped tiling
- [Image optimization](https://fantinel.dev/web-images-modern-formats/)

From Elianiva's:

- Link/page hover animation
- Dark mode switch (Matt's is automatic, but I like the option)
- Fading transition between pages (doesn't work as well on mobile - flashes)
- Scrollbar styling
- Scroll to top button
- Color scheme, but needs more contrast on homepage post elements
- Search in posts with live updating
- Semi-sticky header with animations and mobile reactivity (Matt's mobile nav loses the links)
- Info bubbles can have header info: date and title

Matt's site gives errors on dev, but build works. I'm not sure if I can work with that though. I think I may start with the Elianiva site and add component styling ideas from Matt.

- SVG animations I'll make on my own
- Hover animations on posts shouldn't be too hard
- Smooth scrolling I think is just a CSS attribute on html, then maybe some logic to setting scroll points when navigating to different pages, i.e. backwards
- I think I can add filename and language info pretty easily, but maybe it depends on the highlighter or markdown preprocessor, but both use MDSveX.
- I'll make my own highlighting classes
- I don't think adding images to posts will be difficult, but making them look nice might be
- I'll have to see if the tile shapes are automatic and if they depend on the post contents

The search on Elianiva's I would guess is just a library but seems a bit daunting. The sticky header might be a little tricky but not sure. Scroll to top isn't bad, and I think the fading is an option provided by Svelte, but not sure. Huh, they both have smooth-scrolling; maybe I just noticed it on Matt's because it scrolls to points on the page.

If GitHub stops auto deleting my `.nojekyll` that would be nice. I just deployed again, and it seems to be sticking now.
