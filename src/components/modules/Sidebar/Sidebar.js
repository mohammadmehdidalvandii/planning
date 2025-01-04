"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaArrowLeftLong } from "react-icons/fa6";
import { usePathname } from 'next/navigation';



function Sidebar({user}) {
    const pathName = usePathname();
    const [activeMenu ,  setActiveMenu] = useState(false)
    const [userLocation , setUserLocation] =useState('/')


    useEffect(()=>{
        const userPath = pathName;
        setUserLocation(userPath);
    },[pathName])

    // <<<< Start Handler Show Menu and Exit Menu >>>>
    const handlerShowMenu =()=>{
        setActiveMenu(!activeMenu);
    }

    const handlerExitMenu = ()=>{
        setActiveMenu(false)
    }
  
    useEffect(()=>{
        const handlerKeyDown = (event)=>{
            if(event.key === "Escape"){
                setActiveMenu(false)
            }
        }

        if(activeMenu){
            window.addEventListener("keydown", handlerKeyDown)
        }

        return()=> window.removeEventListener("keydown", handlerKeyDown)
    },[activeMenu]) 
    // <<<< End Handler Show Menu and Exit Menu >>>>

  return (
    <>
        <section className="hidden lg:block 2x:fixed xl:fixed  lg:fixed 2xl:w-[310px] xl:w-[270px] lg:w-[200px] bg-background-100 h-full dark:bg-background-200 py-4 px-6">
        <div className="block text-center text-font-default  border-b dark:text-font-200">
            <p className="block font-danaBold text-xl mb-3"> <span className="block text-secondary-default">{user?.username} </span>عزیز به Planning خیلی خوش آمدی.</p>
        </div>
        <ul className="block mt-6">
            <li className="block mb-4">
                <Link href="/" className={userLocation   === "/" ? "links_active":"links"}>
                 <span className="block">پنل کابری</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="/TodoList" className={userLocation   === "/TodoList" ? "links_active":"links"}>
                 <span className="block">لیست وظیفه</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="/NoteList" className={userLocation   === "/NoteList" ? "links_active":"links"}>
                 <span className="block">یاداشت ها</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="/Setting" className={userLocation    === "/Setting" ? "links_active":"links"}>
                 <span className="block">تنظیمات</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
        </ul>
    </section>

        <span 
        className="flex items-center justify-center lg:hidden m-4 text-3xl text-font-default cursor-pointer rounded-lg bg-background-100 w-12 h-12 ease-linear duration-300 dark:bg-background-200 dark:text-font-100 hover:text-font-200 hover:dark:text-background-100"
        onClick={handlerShowMenu}
        >
            <FaBars/>
        </span>
        {activeMenu && (
        <div className="shadow">
                   <section className="block w-[220px] bg-background-100 h-full dark:bg-background-200 py-4 px-6">
                    <span className="block text-red-700 text-2xl cursor-pointer"
                    onClick={handlerExitMenu}
                    >
                        <FaTimes/>
                    </span>
        <ul className="block mt-6">
            <li className="block mb-4">
                <Link href="/" className={userLocation   === "/" ? "links_active":"links"}>
                 <span className="block">پنل کابری</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="/TodoList" className={userLocation   === "/TodoList" ? "links_active":"links"}>
                 <span className="block">لیست وظیفه</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="/NoteList" className={userLocation   === "/NoteList" ? "links_active":"links"}>
                 <span className="block">یاداشت ها</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="/Setting" className={userLocation    === "/Setting" ? "links_active":"links"}>
                 <span className="block">تنظیمات</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
        </ul>
    </section>
        </div>
        )}
    </>
  )
}

export default Sidebar