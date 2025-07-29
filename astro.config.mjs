import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      filter: (page) => !page.pathname.includes('undefined'),
      serialize: ({ url }) => ({
        url: url.pathname,
        lastmod: new Date().toISOString(),
      }),
    }),
  ],
});
