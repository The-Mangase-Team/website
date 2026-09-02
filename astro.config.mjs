// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import iconset from 'astro-iconset';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [svelte(), icon({
      iconDir: 'src/assets/icons'
  }), iconset({
    iconDir: 'src/assets/icons'
  })]
});
