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
        menuColor: "#FDA214",
        timerMoves: "#DFE7EC"
      },
      colors: {
        menuColor: "#7191A5",
        memoryColor: "#152938",
        scoreColor:  "#304859"
      },
      width : {
        smallCircle: "46px"
      },
      height : {
        smallCircle: "46px"
      }
    },
  },
  plugins: [],
}

