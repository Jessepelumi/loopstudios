/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./images/m_image-hero.jpg')",
      }
    },
  },
  plugins: [],
}
