import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter Variable', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'rosa-aquamarine-600': '#00ffbb',
				'rosa-gray-100': '#c7c7c7',
				'rosa-gray-800': '#222222',
				'rosa-gray-900': '#1f1f1f',
				'rosa-red-400': '#ff644f'
			}
		}
	},
	plugins: []
};
