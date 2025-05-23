// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [preact(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
