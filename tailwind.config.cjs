const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],

	theme: {
		extend: {},
	},

	plugins: [
		require('flowbite/plugin')
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {

				primary: { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" }
			}
		}
	}
}

module.exports = config;