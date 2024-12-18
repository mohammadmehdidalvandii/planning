/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
          200:"#242A38"
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
        container:{
          center:true,
        },
        screen:{
          "xs":"320px",
          "sm":"576px",
          "md":"768px",
          "lg":"992px",
          "xl":"1220px",
        }
      }
    },
  },
  plugins: [],
};
