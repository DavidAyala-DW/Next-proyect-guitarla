module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        "header" : "url('/img/header.jpg')"
      },
      colors : {
        "primary" : "#D88506",
        "footer" : "#262626"
      },
      maxWidth : {
        "product" : "60%"
      },
      keyframes :{

        "header" : {

          '0%' : {
            opacity : "0",
            transform: "translateX(-10rem)"
          },
          '75%' : {
            opacity: ".7"
          },
          '100%':{
            opacity : "1",
            transform: "translateX(0)"
          }

        }

      },
      animation :{
        "header" : 'header .5s ease-in-out'
      }
    },
  },
  plugins: [],
}
