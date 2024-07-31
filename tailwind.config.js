/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green:
        {
          'green-100': '#f0f9f4',
          'green-200': '#c8e6c9',
          'green-300': '#a5d6a7',
          'green-400': '#81c784',
          'green-500': '#66bb6a',
          'green-600': '#4caf50',
          'green-700': '#43a047',
          'green-800': '#388e3c',
          'green-900': '#2e7d32',
        },
        gray: {
          'gray': '#6d6e6b',
          'gray-100': '#f5f5f5',
          'gray-200': '#eeeeee',
          'gray-300': '#e0e0e0',
          'gray-400': '#bdbdbd',
          'gray-500': '#9e9e9e',
          'gray-600': '#757575',
          'gray-700': '#616161',
          'gray-800': '#424242',
          'gray-900': '#212121',
        },
        white: {
          'bg': '#f3f4ec',
          'regular': '#ffffff',
        },
      },

    },

  },
  plugins: [],
  // add color palette

}

