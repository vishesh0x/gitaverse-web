import { defineConfig } from "astro/config";
// Output page.html files so Cloudflare Pages serves clean URLs such as /features.
export default defineConfig({
  site: "https://gitaverse.visheshraghuvanshi.in",
  build: { format: "file" },
});
