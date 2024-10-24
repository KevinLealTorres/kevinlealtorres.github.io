/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'k-lightgreen': '#3FBF6C',
				'k-darkgreen': '#052614',
				'k-green': '#148C32',
				'k-darkblue': '#0E1821',
			},
		},
	},
	plugins: [],
}
