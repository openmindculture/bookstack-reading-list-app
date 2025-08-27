// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// import type { PluginOption } from 'vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  vite: {},
  site: 'https://dev-ux-lesezeichen.de',
  base: '/',
  trailingSlash: 'always',
});
