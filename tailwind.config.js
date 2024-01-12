/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
        container: {
          center: true,
          minWidth: {
            default: '3000px', // Set your desired default width here
          },
         
        },
        fontFamily: {
          Poppins: ['Poppins', 'sans-serif'],
        },
        backgroundColor: {
          customColor: '#8fa0cc',
          btnColor:'#042069'
        },
      },
    },
  
  plugins: [],
}