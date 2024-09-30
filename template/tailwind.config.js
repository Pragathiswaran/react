/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        'cus-range':{'min': '500px', 'max':'640px'}
      }
    },
  },
  plugins: [],
}

