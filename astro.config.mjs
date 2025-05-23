// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.SITE_URL || "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [preact(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});