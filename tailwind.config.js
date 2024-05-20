
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  theme: {
    extend: { 
      fontFamily: {
        'archivo-narrow': ['Archivo Narrow', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'arial-black': ['Arial Black', 'sans-serif'],
        'futura': ['Condensed ExtraBold', 'sans-serif'],
        'nike-futura': ['Nike Futura ND', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

