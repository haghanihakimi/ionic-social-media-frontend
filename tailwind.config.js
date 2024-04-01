/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4b40b5',
        'secondary': '#8676d5',
        'light-primary': '#6051bd',
      },
      fontFamily: {},
      fontSize: {},
      keyframes: {
        opacityFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1.0' },
        },
        infiniteRotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        alertFade: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1.0', transform: 'translateY(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0.0' },
          '100%': { opacity: '1.0' }
        },
      },
      animation: {
        'opacityFade': 'opacityFade 260ms linear 0ms 1 alternate',
        'alertFade': 'alertFade 200ms linear 0ms 1 alternate',
        'infiniteRotation': 'infiniteRotation 5s linear infinite',
        'fadeIn': 'fadeIn 120ms linear 0ms 1 alternate',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
}
