/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'hov': '#F2DFF1',
      'black':'#000000'
    },
    extend: {},
    extend:{
      colors:{
        'hov': '#F2DFF1',
      
      }
    }
  },
  plugins: [],
}