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
          default: '3000px',
        },
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        customColor: '#8fa0cc',
        btnColor: '#042069',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'ph': { 'max': '480px' }, // Mobile screens up to 450px
      'sm-max': { 'max': '639px' }, // Screens up to 639px
      'md-max': { 'max': '767px' }, // Screens up to 767px
      'lg-max': { 'max': '1023px' }, // Screens up to 1023px
      'xl-max': { 'max': '1279px' }, // Screens up to 1279px
      '2xl-max': { 'max': '1535px' }, // Screens up to 1535px
    },
  },
  plugins: [],
};
