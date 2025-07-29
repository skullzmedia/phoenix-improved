import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      filter: (page) => !page.pathname.includes('/drafts'), // optional
      serialize: (page) => ({
        url: page.pathname,
        lastmod: new Date().toISOString(), // for now, use build time
      }),
    }),
  ],
});
