module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./index.html",
      ],
      theme: {
        extend: {
          fontFamily: {
            hat: ["var(--font-noto-serif)"],
            mono: ["var(--font-roboto-mono)"],
          },
          colors: {
            "FM-orange": "#D85134",
            "FM-blue": "#292E3B",
            "EN-ice": "#C8F7FF",
            "EN-darkblue": "#0059AA",
          },
          screens: {
            "3xl": "1600px",
            "4xl": "1920px",
          },
        },
      },
    },
    autoprefixer: {},
  },
};
