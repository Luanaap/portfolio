/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        'dark-purple': '#4831d4',
        'light-green': '#ccf391',
        'deep-purple': '#3d155f',
      }
    },
  },
  plugins: [],
}

