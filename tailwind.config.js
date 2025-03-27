/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  
  theme: {
    extend: {
      fontFamily: { 
        quick: ["Quicksand" , "sans-serif"]
       },
       colors: {
        background : "#1E1E1E",
        textPrimary : "#F5F5F5",
        primary : "#3Eb6ee",
        secondary : "#A7C6E9",
        
       }
    },
  },
  plugins: [],
}

