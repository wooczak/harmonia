/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        small: '0.833rem',
        base: '1rem',
        lg: '1.2rem',
        xl: '1.44rem',
        '2xl': '1.728rem',
        '3xl': '2.074rem',
        '4xl': '2.986rem'
      },
      colors: {
        black: '#202020',
        yellow: '#F2C744',
        grey: '#F2F0EE',
        white: '#FEFEFE',
        darkGrey: '#686868',
        errorRedBg: '#F8E6E6',
        errorRedBorder: '#A40000',
        btnYellowStandard: '#F2C744',
        btnYellowHovered: '#FECF09',
        btnYellowActive: '#F1B500',
        btnYellowDisabled: '#FFEDB8'
      }
    }
  },
  plugins: []
}
