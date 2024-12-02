/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px',
  		'3xl': '1600px',
  		'4xl': '1920px'
  	},
  	extend: {
  		fontFamily: {
  			hat: ["var(--font-noto-serif)"],
  			pontano: ["var(--font-pontano-sans)"]
  		},
  		colors: {
  			'FM-orange': '#EA4325',
  			'FM-blue': '#292E3B',
  			'EN-ice': '#C8F7FF',
  			'EN-darkblue': '#0059AA'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		screens: {
  			'3xl': '1600px',
  			'4xl': '1920px',
  			'5xl': '2500px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
