/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '2/3': '66.666667%', // This adds a max-w-2/3 class
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities(
      {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-thumb': {
          'scrollbar-color': '#888 #eee', // thumb color and track color
        },
        '.scrollbar-track': {
          'scrollbar-track-color': '#eee',
        },
      },
      ['responsive']
    )
  }],
}