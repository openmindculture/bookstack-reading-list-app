import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx}',
		'./public/**/*.html'
	],
	theme: {
		extend: {}
	},
	plugins: []
};

export default config;
