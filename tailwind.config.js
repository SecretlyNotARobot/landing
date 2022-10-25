/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
      fontFamily:{
          'display':['halibut'],
      },
      extend: {
          screens: {
              'md': [{raw:'(min-width: 768px) and (pointer: fine)'} , {raw:'(min-width: 1023px) and (pointer: coarse)'} ],
          },
      },
  },
  plugins: [
      require("daisyui"),
      require("tailwind-scrollbar"),
      require('tailwindcss-bg-patterns'),
  ],
}
