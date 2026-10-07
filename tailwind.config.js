/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B4D96",
        "primary-dark": "#2C3A78",
        secondary: "#96ABFF",
        accent: "#E3C56F",
        "accent-dark": "#C9A84A",
        ink: "#15123A",
        "ink-2": "#1E1A4D",
        surface: "#F6F5FB",
        line: "#E6E4F0",
        muted: "#64627A",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
