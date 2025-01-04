"use client"
import React from 'react';
import { IoExitOutline } from "react-icons/io5";
import BtnTheme from '../BtnTheme/BtnTheme';
import useAuthStore from '@/zustand/useAuthStore';



function Navbar({user}) {
    console.log("user" , user)
    const {logout} = useAuthStore();

    const handlerExit = ()=>{
        logout()
    }
  return (
    <section className="block w-full py-4  bg-background-100 dark:bg-background-200">
        <div className="container ">
            <div className="flex items-center justify-between">
                <div className="block text-center">
                    <h1 className="block uppercase dark:text-background-100 font-serif font-extrabold lg:text-5xl md:text-3xl text-2xl ">Planning</h1>
                    <span className="block font-serif text-base text-font-100">todo & note</span>
                </div>
                <div className="flex justify-center gap-4">
                    <BtnTheme/>
                    {user?.refreshToken && (
                    <button className="btn_primary" onClick={handlerExit}>
                        <IoExitOutline/>
                    </button>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar