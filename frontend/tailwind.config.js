/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens: {
      'sm': '430px', // Add a custom breakpoint at 425px
    }},
    customColor: {
      dark: 'rgba(15, 23,42, 1)',
    }
  },
  plugins: [],
}
