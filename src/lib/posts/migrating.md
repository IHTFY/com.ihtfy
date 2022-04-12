---
slug: migrating
title: Migrating
date: 2022-02-19
excerpt: Moving my site to GitHub
tags: [code, design, website]
---

<script>
  import CodeBlock from "$lib/components/blog/code-block.svelte";
</script>

I'm going to try migrating this site from WordPress to a SvelteKit site hosted on GitHub. I'm paying $99 per year to host on wordpress.com; there's a cheaper plan now, but I don't see any way to downgrade - only upgrade. It's also very limiting: I can't add an SVG image, custom JS (expected), but even the additional CSS rules are very limited because the theme overrides them.

My hope is to export this site data. Find a way to "load" it into a SvelteKit site, then I'll go through all the posts by hand and make sure everything is working correctly. I used to host a Jekyll blog site on gh pages, but it kept breaking because GitHub would update dependencies automatically.

One nice thing about WordPress is I can easily write from my phone and schedule posts. I'm actually starting this post on February 17th, but I'll post it on the 19th.

There are some limitations on GitHub pages. They need to be static which is fine with me, but I'll likely need to do some tweaking and use a different theme. The storage and bandwidth limitations on GitHub aren't a concern to me since I don't get much traffic to my site, and I plan on hosting most videos on YouTube.

## Exporting

I went to `https://wordpress.com/export/frankiemercado.com` to export all my website content. This gave me a big XML file with all my posts. The images are nested inside of month and year folders, so one file may be at `./2022/01/image.jpg`.

The formatting of the XML is pretty cluttered; lots of "wp" comments and "wp:..." tags which is to be expected. I think I'd like my site to have each post structured as markdown. When I searched for "wordpress to markdown" I find [this script](https://github.com/lonekorean/wordpress-export-to-markdown).

From Windows PowerShell, I go to the folder containing all my data.

`cd .\\Downloads\\wp20220218`

Then I run the command:

<CodeBlock lang="shell">

```shell
npx wordpress-export-to-markdown
```

</CodeBlock>

I renamed the XML file to `export.xml`, and kept the default output folder name. These are the settings I used:

<CodeBlock lang="shell" filename="config">

```shell
Starting wizard…
? Path to WordPress export file? export.xml
? Path to output folder? output
? Create year folders? No
? Create month folders? No
? Create a folder for each post? Yes
? Prefix post folders/files with date? Yes
? Save images attached to posts? Yes
? Save images scraped from post body content? Yes
? Include custom post types and pages? No
```

</CodeBlock>

Now I have a folder called `output` filled with folders for each post named like: YYYY-MM-DD-PostTitle. Inside one of these folders is an `index.md` file which contains the text and formatting of the post. There is also a folder called `images` which contains any images from that post.

## New Theme

Next, I need to find a new theme to use.

- [This one](https://fantinel.dev/blog-development-sveltekit/) looks nice, but has some server side code I'd need to work around if I host for free on GitHub
- [This one](https://github.com/svelteland/svelte-kit-blog-demo) is simple and static.

After looking at the first one again, it looks like he's [hosted on github-pages](https://github.com/matfantinel/matfantinel.github.io/deployments/activity_log?environment=github-pages) too, so I think I'll start there.

## Setup

I downloaded the .zip file from [his GitHub](https://github.com/matfantinel/matfantinel.github.io), extract it, and open in VS Code. Looking at `package.json` I see the usual SvelteKit scripts: `dev`, `build`, `preview`. He also has a `deploy` script for `gh-pages` to publish the `build` folder, and some `prettier` stuff for linting and formatting.

I'll run `npm install` and see what happens. No errors.

I think I'll need to change the `build` script though, since I'm on Windows, and I don't think it will recognize the `rm -rf ...` command, though PowerShell does use some Unix commands, so who knows.

Let's try `npm run dev`. Errors: `config.kit.target is no longer required, and should be removed`.

In `svelte.config.js` I'll remove the `target` from `kit: {...`.

Now when I run, there are no errors in the console, but the page (`localhost:3000`) has an error: `Unrecognized option 'enableSourcemap'`.

After searching a bit, I may need to update svelte or some other decency. I'll run `npm update`. That seemed to fix it.

I see the site, but when I scroll down and up, it crashes and gives another error: `[plugin:vite-plugin-svelte] Error while preprocessing C:/Users/Frankie/Documents/Code/blog/src/lib/posts/web-workers.md - Cannot read property 'buildPlaceholders' of undefined`.

I run `npm install` again to see if that fixes anything. Nope.

I'm able to open the `resume` page fine, but all of the blog posts are broken because of the issue.

I wonder if I need to run the `postbuild` script to run `svelte-sitemap`, just guessing. I'll need to make the `build` script Windows PowerShell friendly first.

I added a file called `.nojekyll` to the `/static` directory. Then the `build` script just becomes `svelte-kit build`.

I'm also going to remove the Plausible analytics. I'll just comment out the scripts in the head of `app.html`.

Still not working. I see someone posted [the same issue](https://github.com/matfantinel/matfantinel.github.io/issues/18). I was able to fix the latter issue that's linked, but I haven't been able to fix the mdsvex/prismjs problem.
