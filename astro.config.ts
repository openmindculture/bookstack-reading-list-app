import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import tsconfigPaths from 'vite-tsconfig-paths';

// import type { PluginOption } from 'vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  vite: {
    plugins: [tsconfigPaths() as any],
  },
  site: 'https://dev-ux-lesezeichen.de',
  base: '/',
  trailingSlash: 'always',
});
