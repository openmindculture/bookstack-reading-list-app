// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// import type { PluginOption } from 'vite';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
	// You do NOT need the vite.plugins entry for Tailwind
	// when using the @astrojs/tailwind integration.
	vite: {},
});
