/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2.5rem",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      primary: {
        "purple-dark": "#240D57",
        "purple-light": "#501FC1",
        purple: "#8456EC",
        pink: "#E87BF8",
      },
      secondary: {
        "purple-1": "#CCB6FF",
        "purple-2": "#EDE5FF",
        "purple-3": "#F6F2FF",
      },
      alert: {
        "red-light": "#FFD7E0",
        red: "#E61445",
        "green-light": "#D3FFE2",
        green: "#00805E",
      },
      neutrals: {
        100: "#FBFAFF",
        200: "#F2F2F2",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#828282",
        600: "#4F4F4F",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
