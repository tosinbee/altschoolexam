/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightGrey: "hsla(0, 0%, 96%, 1)",
        primaRed: " hsla(350, 100%, 50%, 1)",
        deepPurple: " hsla(313, 55%, 31%, 1)",
      },
    },
  },
  plugins: [],
};
