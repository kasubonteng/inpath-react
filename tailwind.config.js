/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				header: ["Bicyclette-Bold", "sans-serif"],
				"header-bold": ["Bicyclette-ExtraBold", "sans-serif"],
				normal: ["Eudoxus-Medium", "sans-serif"],
			},
			colors: {
				secondary: "#0B8659",
			},
			animation: {
				"bounce-slow": "bounce 3s linear infinite",
			},
		},
	},
	plugins: [],
};
