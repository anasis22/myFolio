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
        },
        entryHello:{
          "0%": { transform: "translateY(-100px)", opacity:"0" },
          "100%": { transform: "translateY(0px)", opacity:"1"  },
        },
        entryAnas:{
          "0%": { transform: "translateY(-100px)", opacity:"0" },
          "100%": { transform: "translateY(0px)", opacity:"1"  },
        },
        entryTyping:{
          "0%": { transform: "translateY(-100px)", opacity:"0" },
          "100%": { transform: "translateY(0px)", opacity:"1"  },
        },
        entryNavbar:{
          "0%": { transform: "translateY(-200px)", opacity:"0" },
          "100%": { transform: "translateY(0px)", opacity:"1"  },
        },
        entryIcons:{
          "0%": { transform: "translateY(-200px)", opacity:"0" },
          "100%": { transform: "translateY(0px)", opacity:"1"  },
        },
        entryDownArrow:{
          "0%": { transform: "translateY(-200px)", opacity:"0" },
          "100%": { transform: "translateY(0px)", opacity:"1"  },
        },
        projectHover: {
          "0%": { transform: "rotate( 0.0deg)" },
          "100% ": { transform: "rotate(2.0deg)" },
        },



      },
      animation: {
        waveHand: "waveHand 2.5s ease infinite",
        scrollDown: "scrollDown 4s ease infinite",
        menuCategOpen: "menuCategOpen .5s ease forwards",
        menuCategClose: "menuCategClose 1s ease forwards",
        entryNavbar: "entryNavbar 3s ease forwards",
        entryHello: "entryHello 2.5s ease forwards",
        entryAnas: "entryAnas 2s ease forwards",
        entryTyping: "entryTyping 1.5s ease forwards",
        entryIcons: "entryIcons 1s ease forwards",
        entryDownArrow: "entryDownArrow .5s ease forwards",
        projectHover: "projectHover .3s ease-in-out forwards",
      },
      transformOrigin: {
        tOrigin: '70% 70%'
      },
      borderWidth: {
        bw: '0.5px'
      },
      padding: {
        pad: '0.10rem'
      }

    },
  },
  plugins: [],
}