# GitaVerse website (Astro, static)
    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs dist/
Needs Node 22 or newer. Cloudflare Pages: build command `npm run build`, output directory `dist`, add NODE_VERSION=22 as an environment variable.

- Links, version, feature text: src/config.ts
- Chapters, glossary, topics: src/data/*.json (copied from the app's assets/content)
- Images: public/shots (optimised from your store listing images), public/icon.png, public/og.png
- Fonts are self-hosted through @fontsource, so the site makes no third-party requests.
- Privacy, Terms and Credits follow the text inside the app. Update both together.
- Add new pages to PAGES in src/config.ts; the sitemap and breadcrumbs are generated from it.
- The theme follows the visitor's system setting until they use the toggle, which stores the choice in localStorage.
