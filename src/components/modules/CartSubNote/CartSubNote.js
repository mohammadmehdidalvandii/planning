"use client";
import EditNote from "@/components/template/noteList/EditNote/EditNote";
import useNoteStore from "@/zustand/useNoteStore";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function CartSubNote({ id, subject , text }) {
  const {removeNote} = useNoteStore()
  const [showTextNote, setShowTextNote] = useState("");
  const [showUpdata , setShowUpdate] = useState(false);
  const handlerEditNote =()=>{
    setShowUpdate(true)
  }

  const handlerShowText = () => {
    setShowTextNote(true);
  };

  const handlerExitAddNote =()=>{
    setShowTextNote(false)
    setShowUpdate(false)
  }

  return (
    <div className="block border p-2 rounded-md border-background-dark mt-4 dark:border-font-100">
      <span className="block font-danaBold text-xl text-font-100">
        {subject}
      </span>
      <div className="flex items-start justify-end  gap-3 mt-2">
        <button
          className="flex text-font-default dark:text-font-100 ease-linear duration-300 hover:text-secondary-100 dark:hover:text-secondary-100"
          onClick={handlerShowText}
        >
          مشاهده
        </button>
        <button className="flex text-font-default dark:text-font-100 ease-linear duration-300 hover:text-red-600 dark:hover:text-red-600"
          onClick={()=>{
            removeNote(id)
          }}
        >
          حذف
        </button>
        <button className="flex text-font-default dark:text-font-100 ease-linear duration-300 hover:text-primary-100 dark:hover:text-primary-100"
          onClick={handlerEditNote}
        >
          ویرایش
        </button>
      </div>

      {showTextNote && (
        <div className="shadow right-0">
          <button
            className="btn_red mt-1 mr-1 w-[70px]"
            onClick={handlerExitAddNote}
          >
            <FaTimes />
          </button>
          <div className="box max-w-[50%] mx-auto mt-12">
            <p className="break-words w-full text-wrap font-danaMedium text-xl text-font-default dark:text-font-200">
              {text}
            </p>
          </div>
        </div>
      )}
      {showUpdata && (
         <div className="shadow right-0" 
         >
                <button className="btn_red mt-1 mr-1 w-[70px]" 
                     onClick={handlerExitAddNote}
                 ><FaTimes/></button>
                 <EditNote
                  id={id}
                 />  
                 
         </div>
      )}
    </div>
  );
}

export default CartSubNote;
