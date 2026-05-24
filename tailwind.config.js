/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        iplDark: "#0B0B14",
        iplCard: "#1A1A2E",
        iplNeon: "#00E5FF",
        iplPurple: "#7B2CBF",
        iplAccent: "#FF0055",
      },
    },
  },
  plugins: [],
}
