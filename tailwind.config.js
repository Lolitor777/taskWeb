/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: '#004E89',
        blueSecondary: '#1A659E',
        blueThird: '#2F52E0',
        orangePrimary: '#FF6B35',
        oarangeSecondary: '#F7C59F',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

