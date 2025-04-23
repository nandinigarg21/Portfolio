/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
        fontFamily: {
          edu: ['"Edu AU VIC WA NT Arrows"', 'cursive'],
          winky: ["Winky Rough", "sans-serif"]
        },
      },
    },
  plugins: [],
}