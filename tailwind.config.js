/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './component/EditMenu.js',
    './pages/index.js',
    
  ],
  theme: {
    extend: {
      rotate:{
        '270': '270deg',
        '315': '315deg',
      },
      height:{
        '800':'800px'
      }, 

      width:{
        '718':'718px' 
      }
    },



  },
  plugins: [],
}