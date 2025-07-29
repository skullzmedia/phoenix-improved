import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      filter: (page) => !page.pathname.includes('/drafts'),
      serialize: (page) => ({
        url: page.pathname || page.url?.pathname || '/', // fallback
        lastmod: new Date().toISOString(), // use publish date if possible
      }),
    }),
  ],
});
