/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '-100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      animationDelay: {
        '1000': '1s',
      },
    },
  },
  plugins: [],
}
