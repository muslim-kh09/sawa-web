/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        surface: '#0A0A0A',
        surfaceHover: '#141414',
        border: '#1A1A1A',
        primary: '#0A84FF', // electric blue
      }
    },
  },
  plugins: [],
}
