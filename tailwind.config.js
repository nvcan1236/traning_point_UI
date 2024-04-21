/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", 'sans-serif'],
      },
      textColor: {
        
      },
      backgroundColor: {
        
      },
      colors: {
        mainBlue: '#114f9e',
        tintBlue: "#cfdcec",
        shadeBlue: "#031020"
      }
    },
  },
  plugins: [],
}