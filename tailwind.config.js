/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#DF4830',
      'secondary': "#f5cec8",
      'white': '#FFFFFF',
      'black': '#242424',
      'grey': '#F3F3F3',
      'dark-grey': '#6B6B6B',
      'red': '#FF4E4E',
      'transparent': 'transparent',
      'purple': '#8B46FF',
      'footer': "#fbf5f5",
      'fb': "#1877F2",
      'green': "#009f50",
      'ig-from': "#f9ce34",
      'ig-mid': "#ee2a7b",
      'ig-to': "#6228d7"
  },

  fontSize: {
      'sm': '12px',
      'base': '14px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '45px',
      '6xl': '70px',
      '7xl': '90px',
  },

  extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"]
      },
      screens: {
        '3xl': '1920px',
      },
  },
  },
  plugins: [],
}

