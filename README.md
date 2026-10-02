# [ihtfy.com](https://ihtfy.com)

Personal website and blog of Frankie Mercado (IHTFY). This repository is maintained
independently. It uses SvelteKit, Markdown posts in `src/lib/posts`, and static
assets in `static`.

## Development

Use Node.js 22.17 or newer and pnpm 12.8.1 (pinned in `packageManager`), then
install dependencies and start the development server:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Build and review

```sh
pnpm lint
pnpm build
pnpm preview
```

Check the homepage, blog archive, an article, resume, and theme switch before
publishing. Keep existing post slugs and asset paths so bookmarked links work.

## Publishing

GitHub Pages publishes the `gh-pages` branch at `/` with the custom domain
`ihtfy.com`. Build and inspect the output before running `pnpm ghdeploy`.
Preserve `static/CNAME` and `static/.nojekyll`. Other subdomains are served by
separate repositories; this site's deployment does not require DNS changes.

`static/ads.txt` is retained because subdomain sites may use its authorization.
It does not load or display ads on this site.
