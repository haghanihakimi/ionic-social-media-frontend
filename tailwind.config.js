/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
      fontSize: {},
      keyframes: {
        opacityFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1.0' },
        },
        alertFade: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1.0', transform: 'translateY(0%)' },
        },
      },
      animation: {
        'opacityFade': 'opacityFade 260ms linear 0ms 1 alternate',
        'alertFade': 'alertFade 200ms linear 0ms 1 alternate',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
}
