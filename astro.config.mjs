// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      serialize: (page) => ({
        url: page.url.href, 
        lastmod: new Date().toISOString(), 
      }),
    }),
  ],
});
