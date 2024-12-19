"use client"
import React, { useEffect, useState } from "react";
import { FaSun ,FaMoon  } from "react-icons/fa";

function BtnTheme() {
    const [theme , setTheme] =useState("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    const handlerTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

  return (
    <button  onClick={handlerTheme} className="btn_primary">
        {theme === "light" ? <FaMoon/> :  <FaSun />}
    </button>
  );
}

export default BtnTheme;
