/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        userVeryDarkGray: "hsl(0, 0%, 17%)",
        userDarkGray: "hsl(0, 0%, 59%)",
        userLightGray: "hsla(0, 0%, 59%, 0.4)",
      },
      backgroundImage: {
        userHeaderBgMobile: "url('/pattern-bg-mobile.png')",
        userHeaderBgDesktop: "url('/pattern-bg-desktop.png')",
      }
    },
  },
  plugins: [],
}