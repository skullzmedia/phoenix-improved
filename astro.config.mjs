import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      filter: (page) => !page.pathname.includes('/drafts'),
      limit: 1000, // Force chunking into sitemap-0.xml, sitemap-1.xml, etc.
      serialize: (page) => ({
        url: page.pathname || page.url?.pathname || '/',
        lastmod: new Date().toISOString(), // You can customize per post if needed
      }),
    }),
  ],
});
