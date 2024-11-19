/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'green-verbena': '#708a6f',
				'green-verbena-light': '#EAD7C5',
				'brown-verbena': '#A67C52',
				'dun-verbena': '#D5C4A1',
				'almond-verbena': '#EAD7C5',
				'beige-verbena': '#f5f1ec',
			},
		},
	},
	plugins: [],
}
