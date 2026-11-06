# GitaVerse website

The website for [GitaVerse](https://play.google.com/store/apps/details?id=in.visheshraghuvanshi.gitaverse), an offline, ad-free Bhagavad Gita reader for Android. Built with Astro as a fully static site, with no third-party requests.

Live at https://gitaverse.visheshraghuvanshi.in

## Getting started

Requires Node 22.12 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # writes the site to dist/
npm run preview   # serves dist/ locally
```

## Project layout

```
src/
  config.ts        site details, links, feature text, page list
  data/            chapters, glossary and topics copied from the app
  layouts/         page shell, SEO tags, theme toggle, screenshot viewer
  components/      Icon, Shot, PageHead, ChapterList, Get
  pages/           index, features, chapters, credits, privacy, terms, 404, error
  styles/global.css
public/
  shots/           optimised store listing images
  icon.png, og.png, favicon.*, site.webmanifest
  _headers, robots.txt, .well-known/security.txt
```

The sitemap is generated from `PAGES` in `src/config.ts`. Add new pages there.

## Deploying to Cloudflare Pages

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION=22` |

`404.html` is served automatically for unknown paths. `error.html` is for use with a Cloudflare custom error rule for 5xx responses.

## Theme

The site follows the visitor's system light or dark setting. The toggle in the top bar stores an explicit choice in `localStorage`.

## Licence

Code: GPL v3 or later, see `LICENSE`. The GitaVerse name, logo and screenshots, the verse text and the fonts have their own terms, listed in `NOTICE.md`.
