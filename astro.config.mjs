import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.URL || 'http://localhost:3000',
  integrations: [
    svelte(),
    image(),
    prefetch(),
    sitemap({
      filter: (page) => !page.includes('obs-scenes')
    })
  ]
});