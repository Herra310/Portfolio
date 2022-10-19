/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
        'mWhite': '#f2f2f2',
        'mBlue':'#5CB8E4',
        'mPurple':'#8758FF',
        'mBlack': '#181818',
    },
    extend: {
      
    },
  },
  plugins: [],
}