/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {colors:{
      'Bike-primary':'#E76F51',
      'Bike-primary-bg':'rgba(231, 111, 81, 0.1)',
    },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [require('daisyui')],
}

