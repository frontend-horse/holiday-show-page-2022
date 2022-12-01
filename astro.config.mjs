import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: process.env.URL || 'http://localhost:3000',
  integrations: [svelte(),image()],
});
