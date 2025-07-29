import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://www.phoenixcasino.in',
  integrations: [
    sitemap({
      serialize: (page) => {
        const url = typeof page === 'string' ? page : page?.url;
        const pathname = url ? new URL(url, 'https://www.phoenixcasino.in').pathname : '/';

        return {
          url: pathname,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
});
