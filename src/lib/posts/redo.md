---
slug: redo
title: "redo"
date: "2022-02-05"
excerpt: 'TODO'
tags: [todo]
---

I was having trouble getting my sveltekit site to work on github pages. The content was there but it wasn't reading any of my css files. Maybe I didn't had Tailwind CSS setup properly. When I previewed the built site locally it was fine, so maybe it was something else.

I decided to start over. I found [this template](https://github.com/Glench/sveltekit-github-pages-template), which links to [this article](https://sveltesaas.com/articles/sveltekit-github-pages-guide/). When I copied it, it didn't work - I think sveltekit had some changes very recently. I did like the "hack" of building into the `doc` directory rather than creating a gh-pages branch.

I ran `npm init svelte@next` and built the demo app. Then I modified the `svelte.config.js` to use the static adapter. I removed the `target` and `paths` properties as well as the `/** @type {import('@sveltejs/kit').Config} */` link.

I also added the `.nojekyll` file, and added a `CNAME` containing my custom domain: calendar.ihtfy.com. On the GitHub page, I went to Settings > Pages, and then set the Source to master/docs. I also set the custom domain to calendar.ihtfy.com, and toggled on HTTPS.

On the domain admin for ihtfy.com, I went to DNS settings and added a new CNAME record. The Host name is `calendar.ihtfy.com`, and the Data is `ihtfy.github.io.`.

Now when I run `npm run build` in my terminal, it creates all the static assets (html, css, js) in the docs folder. Then when I push it to GitHub, it automatically deploys to [calendar.ihtfy.com](https://calendar.ihtfy.com).

By the way, this site is still just the demo app with the colors and some links changed. Now that I have the demo site working, I may try adding Tailwind CSS again, but maybe not.
