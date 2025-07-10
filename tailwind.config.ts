import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./src/**/*.{astro,html,js,jsx,ts,tsx}",
		"./src/**/*.css",
		"./public/**/*.html"
	],
	theme: {
		extend: {
			fontFamily: {
				"atkinson": ["Atkinson Hyperlegible",
					...defaultTheme.fontFamily.sans],
				"dx-kord": ["Dx Kord", ...defaultTheme.fontFamily.sans]
			},
			fontSize: { /* generated classes automatically prefix with "text-" */
				"clamp-10ch": "clamp(5rem, 10ch, 24rem)"
			},
			colors: { // ADD THIS BLOCK generating text-test-magenta class
				'test-magenta': '#FF00FF',
			},
		}
	},
	plugins: []
};

export default config;
