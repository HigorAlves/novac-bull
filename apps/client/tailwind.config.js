const { breakpoints } = require('./src/assets/styles/grid');
const { spacing, borderRadius, borderWidth, borderColor } = require('./src/assets/styles/tailwind/utilities');
const { fontSizeAndLineHeight } = require('./src/assets/styles/tailwind/fonts');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth,
    borderColor,
    screens: {
      sm: `${breakpoints.sm}px`,
      md: `${breakpoints.md}px`,
      lg: `${breakpoints.lg}px`,
      xl: `${breakpoints.xl}px`,
      xxl: `${breakpoints.xxl}px`
    },
    spacing,
    borderRadius,
    fontSize: { ...fontSizeAndLineHeight },
    extend: {
      lineHeight: { ...fontSizeAndLineHeight },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
