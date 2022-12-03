const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('daisyui')], 
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=black]"],
          primary: "#014284",
          secondary: "#da4167",          
        },
      },
    ],
  },
}

