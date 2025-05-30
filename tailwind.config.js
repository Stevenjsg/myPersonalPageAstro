/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // << ESTA LINEA ES CLAVE
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,mdx}",
    // otras rutas si las tienes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
