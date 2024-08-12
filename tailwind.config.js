/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [    function({ addUtilities }) {
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