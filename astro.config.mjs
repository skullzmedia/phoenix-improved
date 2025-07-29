import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      serialize: (page) => ({
        url: page.url?.pathname || '/', 
        lastmod: new Date().toISOString(), 
      }),
    }),
  ],
});


import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      serialize: (page) => ({
        url: page.url.pathname, 
        lastmod: new Date().toISOString(), 
      }),
    }),
  ],
});
