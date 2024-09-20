/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0078E8",
        secondary: "#93C9FE",
        textColor: "#333333",
        negative: "#ffffff",
      },
    },
  },
  plugins: [],
}