/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./images/m_image-hero.jpg')",
      },
      colors: {
        primary: {
          'white': "hsl(0, 0%, 100%)",
          'black': "hsl(0, 0%, 0%)",
          'dark_gray': "hsl(0, 0%, 55%)",
          'very_dark_gray': "hsl(0, 0%, 41%)",
        }
      }
    },
  },
  plugins: [],
}
