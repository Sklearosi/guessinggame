/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgForRadio: "#304859",
        startButton: "#FDA214",
        menuColor: "#FDA214"
      },
      colors: {
        menuColor: "#7191A5",
        memoryColor: "#152938"
      }
    },
  },
  plugins: [],
}
