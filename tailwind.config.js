/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'customYellow':'#FDD400',
        'customCyan':'#00fdbe'
      },
      fontFamily:{
        jetbrains:['Jetbrains','sans-serif'],
      },
      screens: {
        'sm': '350px',
      }
    },
  },
  plugins: [],
}
