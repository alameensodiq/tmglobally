/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['"Geist Regular"', "sans-serif"],
        "geist-bold": ['"Geist Bold"', "sans-serif"],
        "geist-medium": ['"Geist Medium"', "sans-serif"],
        "geist-light": ['"Geist Light"', "sans-serif"],
        "geist-extralight": ['"Geist ExtraLight"', "sans-serif"],
        "geist-extrabold": ['"Geist ExtraBold"', "sans-serif"],
        jost: ['"Jost Regular"', "sans-serif"],
        "jost-bold": ['"Jost Bold"', "sans-serif"],
        "jost-medium": ['"Jost Medium"', "sans-serif"],
        "jost-light": ['"Jost Light"', "sans-serif"],
        "jost-extralight": ['"Jost ExtraLight"', "sans-serif"],
        "jost-extrabold": ['"Jost ExtraBold"', "sans-serif"],
        manrope: ['"Manrope-Regular"'],
        clash: ['"Clash-Regular"'],
        "clash-bold": ['"Clash Bold"', "sans-serif"]
      }
    }
  },
  plugins: []
};
