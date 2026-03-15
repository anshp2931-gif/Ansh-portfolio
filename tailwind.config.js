/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050505',
        'electric-cyan': '#22d3ee',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
