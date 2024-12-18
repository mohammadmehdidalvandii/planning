"use client"
import React, { useEffect, useState } from "react";
import { FaSun ,FaMoon  } from "react-icons/fa";

function BtnTheme() {
    const [theme , setTheme] =useState("light")

    const handlerTheme = ()=>{  
        if(theme === "light"){
            setTheme("dark")
            document.documentElement.classList.toggle("dark")
            localStorage.setItem("theme" ,"dark")
        }else if(theme === "dark"){ 
                setTheme("light")
            document.documentElement.classList.toggle("dark")
            localStorage.setItem("theme" ,"light")
        }
    }

  return (
    <button  onClick={handlerTheme} className="btn_primary">
        {theme === "light" ? <FaMoon/> :  <FaSun />}
    </button>
  );
}

export default BtnTheme;
