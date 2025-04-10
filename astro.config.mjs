import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in/', // Replace with your actual domain
  integrations: [
    sitemap(),
  ],
});
