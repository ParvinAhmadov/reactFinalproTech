/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '12px',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: 'black',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#444444',
          borderRadius: '20px',
          border: '3px solid black',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#555555',
        },
      });
    },
  ],
}
