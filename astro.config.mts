import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gymple.online',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize: (item) => {
        const isHome =
          item.url === 'https://gymple.online/' ||
          item.url === 'https://gymple.online';
        return {
          ...item,
          lastmod: new Date(),
          changefreq: 'weekly',
          priority: isHome ? 1.0 : 0.7,
        };
      },
    }),
  ],
  srcDir: 'src',
});

