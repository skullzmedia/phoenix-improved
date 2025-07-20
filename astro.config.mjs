import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in', // Make sure no trailing slash here
  integrations: [
    sitemap({
      sitemap: '/sitemap.xml', // Force output to sitemap.xml
    }),
  ],
});
