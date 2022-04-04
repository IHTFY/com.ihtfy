---
slug: shortlist
title: "shortlist"
date: "2022-02-27"
excerpt: 'TODO'
tags: [todo]
---

My new website is getting close to being live. I've transferred all my posts and made quite a few changes. The main things remaining are:

- Replace with my Projects
- Reduce the file size of cover images (smaller resolution and use webp or avif)
- Add SVG animations

There are also 2 bugs I need to look into:

- If you show more posts, then use the back button to navigate, it will still show all posts on the main page. I think this is because the number of posts shown on the homepage is just limited by the api call rather than the svelte component `each` block
- Avoid the default GitHub 404 page. There is a custom 404 which works on dev, but the deployed site doesn't behave the same way.

Matt fixed the [dev error](https://github.com/matfantinel/matfantinel.github.io/issues/18). Apparently, he had left some old code in a post which was using a library from when his site used Jekyll. I think I can use his site as a guide to restructure mine to use dynamic routing for the posts; and then hopefully I can bundle each post into a folder with a markdown file, cover image, and other images. It looks silly to have to duplicate the file structure and reference images with full explicit paths.
