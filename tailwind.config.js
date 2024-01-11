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
      },
    },
  
  plugins: [],
}