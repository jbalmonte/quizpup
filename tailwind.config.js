module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#082032',
        secondary: {
          100: '#334756',
          200: '#2C394B',
        },
        tertiary: '#FF4C29'
      },
      fontFamily: {
        header: ['Lobster'],
        body: ['Roboto']
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}