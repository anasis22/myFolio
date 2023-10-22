/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#6c757d",
        baseColor: "#ec407a"
      },
      fontFamily: {
        baseFamily: "'Gabarito', sans-serif;"
      },
      keyframes: {
        waveHand: {
          "0%": { transform: "rotate( 0.0deg)" },
          "10% ": { transform: "rotate(14.0deg)" },
          "20% ": { transform: "rotate(-8.0deg)" },
          "30% ": { transform: "rotate(14.0deg)" },
          "40% ": { transform: "rotate(-4.0deg)" },
          "50% ": { transform: "rotate(10.0deg)" },
          "60% ": { transform: "rotate( 0.0deg)" },
          "100%": { transform: " rotate( 0.0deg)" },
        },
        scrollDown: {
          "0%": { transform: "translateY(-8px)" },
          "40%": { transform: "translateY(8px)" },
          "60%": { transform: "translateY(-8px)" },
          "80%": { transform: "translateY(8px)" },
          "100%": { transform: "translateY(-8px)" },
        },
        menuCategOpen: {
          "0%": { transform: "translateX(600px)" },
          "100%": { transform: "translateX(0px)" },
        },
        menuCategClose: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(600px)" },
        },
        menuIcon:{
          "0%": { transform: "translateX(0px)", opacity:"1" },
          "100%": { transform: "translateX(300px)", opacity:"0"  },
        }



      },
      animation: {
        waveHand: "waveHand 2.5s ease infinite",
        scrollDown: "scrollDown 4s ease infinite",
        menuCategOpen: "menuCategOpen .5s ease forwards",
        menuCategClose: "menuCategClose 1s ease forwards",
      },
      transformOrigin: {
        tOrigin: '70% 70%'
      },
      borderWidth: {
        bw: '0.5px'
      }
    },
  },
  plugins: [],
}