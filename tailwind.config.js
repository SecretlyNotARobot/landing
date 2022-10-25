/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
      fontFamily:{
          'display':['halibut'],
      },
    extend: {},
  },
  plugins: [
      require("daisyui"),
      require("tailwind-scrollbar"),
  ],
}
