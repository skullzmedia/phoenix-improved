import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      serialize: (page) => ({
        url: page.url.pathname, // ✅ This safely accesses the pathname
        lastmod: new Date().toISOString(), // 🕒 Uses build time as lastmod
      }),
    }),
  ],
});
