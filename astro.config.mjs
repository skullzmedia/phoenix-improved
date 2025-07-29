import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in/',
  integrations: [
    sitemap({
      serialize: (page) => ({
        url: page.pathname,
        lastmod: new Date().toISOString(), // Uses current build time as lastmod
      }),
    }),
  ],
});
