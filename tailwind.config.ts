import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx}',
		'./src/styles/**/*.css',
		'./public/**/*.html'
	],
	theme: {
		extend: {
			fontFamily: {
				'atkinson': ['Atkinson Hyperlegible', 
					...defaultTheme.fontFamily.sans],
				'dx-kord': ['Dx Kord', ...defaultTheme.fontFamily.sans],
			},
		}
	},
	plugins: []
};

export default config;
