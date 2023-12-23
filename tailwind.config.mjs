/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'oswald': ["Oswald","sans-serif"],
				'roboto_condensed': ["Roboto Condensed","sans-serif"]
			},
			colors: {
				"body": "#f1f1f1",
				"innovify_orange": "#f05a28",
				"innovify_blue": "#054371",
				"innovify_grey": "#495865",
			}
		},
	},
	plugins: [],
}
