/** @type {import("postcss-load-config").Config} */
module.exports = {
	plugins: {
		'@tailwindcss/postcss': {}, // must come first
		autoprefixer: {}
	}
};
