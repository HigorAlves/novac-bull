const {breakpoints} = require('./src/assets/styles/grid');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: `${breakpoints.sm}px`,
      md: `${breakpoints.md}px`,
      lg: `${breakpoints.lg}px`,
      xl: `${breakpoints.xl}px`,
      xxl: `${breakpoints.xxl}px`
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
