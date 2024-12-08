/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--background))',
				card: 'rgb(var(--card-background))',
				primary: 'rgb(var(--primary-text))',
			},
		},
	},
	plugins: [],
};
