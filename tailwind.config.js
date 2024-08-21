/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004E89',
        secondary: '#1A659E',
        third: '#FF6B35',
        fourth: '#F7C59F',
        fifth: '#EFEFD0',
        sixth: '#2F52E0',
        black: '#000',
        white: '#fff'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

