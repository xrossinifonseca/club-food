/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F1E9E6",
        details: "#DC2626",
        buttonin: "#4065b4",
      },
    },
  },
  plugins: [],
};
