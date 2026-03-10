import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://gymple.example.com',
  integrations: [react()],
  srcDir: 'src',
});

