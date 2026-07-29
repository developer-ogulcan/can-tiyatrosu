/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,css}'],
  theme: {
    extend: {
      colors: {
        'ct-yellow': '#F6C21E',
        'ct-red': '#B61E2E',
        'ct-black': '#111111',
        'ct-bg': '#FFF9F1',
        'ct-bg-light': '#F2EEE7',
      },
      fontFamily: {
        display: ['"Comfortaa"', 'cursive'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'hero-lg': '0 20px 60px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};
