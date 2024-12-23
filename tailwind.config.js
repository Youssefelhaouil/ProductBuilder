/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  
  theme: {
    container:{
      center: true,
      padding: {
        DEFAULT: '3rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    darkMode: 'class', 
    extend: {
    },
  },
  plugins: [],
}

