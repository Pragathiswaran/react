/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['SF Pro Display','SF Pro Icons','Helvetica Neue','Helvetica','Arial','sans-serif']
      },
      fontSize:{
        xs:'13px',
        '2.5xl':'26px'
      },
      colors:{
        'grey':'#525151',
      }
    },
  },
  plugins: [],
}

