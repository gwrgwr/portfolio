const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'page': 'repeat(4, 100vh)',
      },
      boxShadow: {
        'dropButton': `0px 0px 41px 5px ${colors.purple[700]}`,
        'dropButtonWhite': `0px 0px 41px 5px ${colors.black}`,
      },
    },
  },
  plugins: [],
}

