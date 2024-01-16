/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
      },
      objectPosition: {
        'center-bottom': 'center bottom',
        'center-top': 'center top',
      }

    },
  },
  plugins: [],
}

