import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from 'astro-sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ncrdom.cat',  // Aquí pones la URL base de tu sitio
  integrations: [mdx(), react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
