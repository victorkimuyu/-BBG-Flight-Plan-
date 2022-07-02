/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Trade-Gothic', 'system-ui'],
        'display':['Metropolis', 'system-ui']
      },
      'colors': {
        'bbg-blue': '#0b1d32',
        'bbg-pink-400': '#ea1e4f',
        'bbg-pink-600': '#c2185b',
        'bbg-slate': '#292a30',
        'bbg-blue-100': '#ebecf4',
        'bbg-gray-100': '#f3f3f3',
        'bbg-gray-400': '#696969',
        'bbg-gray-800': '#262626',
        'bbg-black': '#111111'
      },
      gridRow: {
        'span-18': 'span 18 / span 18',
      },
      gridColumn: {
        'span-18': 'span 16 / span 18'
      }
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
