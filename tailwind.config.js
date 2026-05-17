/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '960px',
      },
      colors: {
        brand: {
          color1: '#000000',
          color2: '#A2A6FF',
          color3: '#FFFFFF',
          color4: '#D5D4FE',
          color5: '#DDA9FC',
          card: 'rgba(255, 255, 255, 0.03)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
