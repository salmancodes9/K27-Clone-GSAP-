/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontM3: ['fontM3', 'sans-serif'],
        fontM5: ['fontM5', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
