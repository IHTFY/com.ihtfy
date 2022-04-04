---
slug: plan
title: "plan"
date: "2022-02-24"
excerpt: 'TODO'
tags: [todo]
---

<script>
  import CodeBlock from "$lib/components/blog/code-block.svelte";
</script>

I'll try starting with Elianiva's site, since the dev server works as far as I can tell. The changes I want to make are:

From Matt:

- Have featured images in posts (display when on All Posts /posts)
- Have different sized post tiles, but all small on mobile
- Add hover animation (enlarging) to post tiles
- Add options to display filename and language on code
- Tweak colors for more contrast
- Add SVG animations
- Maybe use scrollTo/scrollIntoView during page navigation
- Maybe use image optimization

I'll also need to format my exported WordPress data to match. I noticed both site store the images in the static folder, then reference the image using either the post slug or explicitly writing it. I'll try to use the slug, like Matt. This is going to take a while.

Actually, I'm going to leave that alone for now. I just realized Matt's site uses Jekyll, and I'm not sure how integrated that is (Edit: No, his old site used it). I'll just take styling points from there for now rather than site structure.

I reran the wordpress-export-to-markdown script to get rid of the date prefixes on each folder. I'll also use the `.svx` extension rather than `.md`. I tried copy/pasting the contents of one of my .md into an existing .svx post and it seems to work. I'll need to sort out links to assets though; maybe I can do a regex replace on the whole project.

I tried doing dynamic routing with `[slug]` again but it didn't work. I think the error using `dev` with Matt's site might be related, so unless I get that working it probably doesn't make sense to use that as a guide for implementing it in Elianiva's site.

Using Windows shell, I ran

<CodeBlock lang="shell">

```shell
for /R %x in (\*.md) do ren "%x" \*.svx
```

</CodeBlock>

to rename all the markdown files.

I also noticed each post needs to have tags. It's probably worth adding them.

I was able to to a regex replace by folder.

I need to restructure the images - I'm doing it by hand. I'll also need to change the links to wordpress assets accordingly. Probably by hand again. I have 62 posts, so it's not too bad; they don't all have pictures either.

Okay, did a bunch of moving/renaming/deleting files and links in posts. Not done yet, but it builds. [Here](https://blog.ihtfy.com/) for now.

I'm not sure why, but adding smooth scroll breaks navigation. Maybe something with lazy loading components? Or more likely the fading transition.
