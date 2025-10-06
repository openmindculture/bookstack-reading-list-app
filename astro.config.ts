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
    // Enable detailed error reporting
    // mode: 'development',
    // build: {
    //  minify: false,
    //  sourcemap: true
    // }
  },
  site: 'https://dev-ux-lesezeichen.de',
  base: '/',
  trailingSlash: 'always',
  // additional debug info:
  // devToolbar: {
  //  enabled: true
  // }
  redirects: {
    '/app': '/',
    '/index-english': '/about/',
  }
});
