import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in/',
  integrations: [
    sitemap({
      serialize: (page) => ({
        url: page.url.pathname, // ✅ use `page.url.pathname` instead of `page.pathname`
        lastmod: new Date().toISOString(),
      }),
    }),
  ],
});
