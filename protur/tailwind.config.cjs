/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'quicksandlight':['quicksandlight', 'sans-serif']
    },



    extend: {
      animation: {'spin-slow': 'spin 4s linear infinite', }},
  },
  plugins: [],
}