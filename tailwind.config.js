/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding:"5px"
    },
    extend: {
      fontFamily:{
        "danaMedium":"danaMedium",
        "danaBold":"danaBold",
        "danaBlack":"danaBlack",
      },
      fontSize:{
        "md":"2rem",
      },
      colors:{
        "background":{
          default:"#F3F4F6",
          dark:"#111827",
          100:"#ffffff",
          200:"#242A38",
          300:"#F3F4F6",
          "shadow-black":"rgba(0,0,0,0.7)",
          "shadow-white":"rgba(255,255,255,0.1)",
        },
        "font":{
          default:"#111827",
          100:"#A0A6B3",
          200:"#C3C5C9"
        },
        "primary":{
          default:"#0EA5E9",
          100:"#0284C7"
        },
        "secondary":{
          default:"#22C55E",
          100:"#16A34A"
        },
        "success":{
          default:"#2F3542"
        },
        borderRadius:{
          50:"50%"
        },
        screen:{
          "xs":"320px",
          "sm":"576px",
          "md":"768px",
          "lg":"992px",
          "xl":"1220px",
          '2xl':"1420px",
        }
      }
    },
  },
  plugins: [],
};
