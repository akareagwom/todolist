/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'lightmode': "url('../images/bg-desktop-light.jpg')"
      },
      position:{
        'absolute': "absolute"
      },
      borderRadius:{
        'circle':"50%"
      }
    },
  },
  plugins: [],
}
