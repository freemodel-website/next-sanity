/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }
      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        hat: ["var(--font-noto-serif)"],
        pontano: ["var(--font-pontano-sans)"],
      },
      colors: {
        "FM-orange": "#EA4325",
        "FM-blue": "#292E3B",
        "EN-ice": "#C8F7FF",
        "EN-darkblue": "#0059AA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2500px",
      },
    },
  },
  plugins: [],
};
