import React from 'react';
import { IoExitOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa";


function Navbar() {
  return (
    <section className="block w-full py-4  bg-background-100">
        <div className="container ">
            <div className="flex items-center justify-between">
                <div className="block text-center">
                    <h1 className="block uppercase font-serif font-extrabold lg:text-5xl md:text-3xl text-2xl ">Planning</h1>
                    <span className="block font-serif text-base text-font-100">todo & note</span>
                </div>
                <div className="flex justify-center gap-4">
                    <button className="btn_primary">
                        <FaSun/>
                    </button>
                    <button className="btn_primary">
                        <IoExitOutline/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar