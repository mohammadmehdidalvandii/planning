import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";



function Sidebar() {
  return (
    <section className="block 2x:fixed xl:fixed  lg:fixed 2xl:w-[310px] xl:w-[270px] lg:w-[200px] bg-background-100 h-full dark:bg-background-200 py-4 px-6">
        <div className="block text-center text-font-default  border-b dark:text-font-200">
            <p className="block font-danaBold text-xl">محمدمهدی دالوندی عزیز به Planning خیلی خوش آمدی.</p>
            <p className="block my-2 text-font-100 text-xs font-semibold">امروز 5 شنبه 29 آذر 1403 </p>
        </div>
        <ul className="block mt-6">
            <li className="block mb-4">
                <Link href="" className='links_active'>
                 <span className="block">پنل کابری</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="" className='links'>
                 <span className="block">لیست وظیفه</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="" className='links'>
                 <span className="block">یاداشت ها</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
            <li className="block mb-4">
                <Link href="" className='links'>
                 <span className="block">تنظیمات</span>
                 <span className="block"><FaArrowLeftLong/></span>
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default Sidebar