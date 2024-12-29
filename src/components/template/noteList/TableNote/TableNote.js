"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import AddNote from "../AddNote/AddNote";

function TableNote() {
      const [showAddNote , setShowAddNote] = useState(false);
  
      const handlerShowAddNote = ()=>{
          setShowAddNote(true)
      }
      const handlerExitAddNote = ()=>{
          setShowAddNote(false)
      }

  return (
    <section className="block w-full mt-4">
      <div className="box">
        <div className="flex items-center justify-between ">
          <h6 className="subTitle">لیست یادداشت</h6>
          <button className="btn_blue"
          onClick={handlerShowAddNote}
          >افزودن</button>
        </div>
        <table className="min-w-full bg-white border border-font-100 dark:border-background-200 mt-4">
          <thead>
            <tr className="bg-background-dark text-font-200 dark:bg-background-300 dark:text-font-default">
              <th className="px-2 py-3 text-center">موضوع</th>
              <th className="px-2 py-3 text-center">شرح</th>
              <th className="px-2 py-3 text-center">تاریخ</th>
              <th className="px-2 py-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody className="text-font-default dark:text-font-100 text-base font-danaMedium">
            <tr className="border-b bg-background-300 dark:bg-background-dark">
              <td className="px-2 py-3 text-center">عملیات 1</td>
              <td className="px-2 py-3 text-center">
                <button className="btn_blue h-10 mx-auto">
                  مشاهده
                </button>
              </td>
              <td className="px-2 py-3 text-center">1402/01/01</td>
              <td className="flex items-center justify-center flex-col md:flex-row  px-2 py-3 text-center gap-2">
                <button className="btn_green h-10 w-[100px]">
                   ویرایش
                </button>
                <button className="btn_red h-10 w-[100px]">
                  حذف شود
                </button>
              </td>
            </tr>
            <tr className="border-b bg-background-300 dark:bg-background-dark">
              <td className="px-2 py-3 text-center">عملیات 2</td>
              <td className="px-2 py-3 text-center">
                <button className="btn_blue h-10 mx-auto">
                  مشاهده
                </button>
              </td>
              <td className="px-2 py-3 text-center">1402/01/02</td>
              <td className="flex items-center justify-center flex-col md:flex-row px-2 py-3 text-center gap-2">
                <button className="btn_green h-10 w-[100px]">
                 ویرایش
                </button>
                <button className="btn_red h-10 w-[100px]">
                  حذف شود
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {showAddNote && (
            <div className="shadow right-0" 
            >
                   <button className="btn_red mt-1 mr-1 w-[70px]" 
                        onClick={handlerExitAddNote}
                    ><FaTimes/></button>
                  <AddNote/>
            </div>
            )}
    </section>
  );
}

export default TableNote;
