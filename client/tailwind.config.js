/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-50": "##eaecee",
        "primary-100": "#bec3c9",
        "primary-200": "#9ea6af",
        "primary-300": "#727e8a",
        "primary-400": "#566573",
        "primary-500": "#2c3e50",
        "primary-600": "#283849",
        "primary-700": "#1f2c39",
        "primary-800": "#18222c",
        "primary-900": "#121a22",
        "secondary-50": "#fef2f0",
        "secondary-100": "#fdd5d1",
        "secondary-200": "#fbc1bb",
        "secondary-300": "#faa59c",
        "secondary-400": "#f99389",
        "secondary-500": "#f7786b",
        "secondary-600": "#e16d61",
        "secondary-700": "#af554c",
        "secondary-800": "#88423b",
        "secondary-900": "#68322d",
      }
    },
  },
  plugins: [],
}