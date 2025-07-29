import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      serialize: (entry) => ({
        ...entry,
        lastmod: new Date().toISOString(), // keep default URL, just add lastmod
      }),
    }),
  ],
});
