"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import AddNote from "../AddNote/AddNote";
import useNoteStore from "@/zustand/useNoteStore";
import EditNote from "../EditNote/EditNote";

function TableNote({notes}) {
  const {removeNote} = useNoteStore()
      const [showAddNote , setShowAddNote] = useState(false);
      const [ showTextNote , setShowTextNote] = useState(false)
      const [showUpdata , setShowUpdate] = useState(false);
      const [textNote , setTextNote] = useState();
      const [updataID , setUpdataID] = useState();

      const handlerUpdatedNote = (noteID)=>{
        setShowUpdate(true)
        setUpdataID(noteID)
      }

    const handlerRemoveNote = (noteID)=>{
      removeNote(noteID)
    }

      const showNoteText = (text)=>{
        setShowTextNote(true)
        setTextNote(text)
      }
  
      const handlerShowAddNote = ()=>{
          setShowAddNote(true)
      }
      const handlerExitAddNote = ()=>{
          setShowAddNote(false)
          setShowTextNote(false)
          setShowUpdate(false)
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
            {
              notes.length > 0 ? (
                notes.slice().reverse().map((note)=>(
                  <tr className="border-b bg-background-300 dark:bg-background-dark" key={note._id}>
              <td className="px-2 py-3 text-center">{note.subject}</td>
              <td className="px-2 py-3 text-center">
                <button className="btn_blue h-10 mx-auto" 
                onClick={()=>showNoteText(note.text)}
                >
                  مشاهده
                </button>
              </td>
              <td className="px-2 py-3 text-center">{note.date}</td>
              <td className="flex items-center justify-center flex-col md:flex-row  px-2 py-3 text-center gap-2">
                <button className="btn_green h-10 w-[100px]"
                onClick={()=>handlerUpdatedNote(note._id)}
                >
                   ویرایش
                </button>
                <button className="btn_red h-10 w-[100px]"
                onClick={()=>handlerRemoveNote(note._id)}
                >
                  حذف شود
                </button>
              </td>
            </tr>
                ))
              ) : (
                <tr>
                <td colSpan="4" className="px-2 py-3 text-center font-danaBlack text-4xl text-red-600">یاداشت  وجود ندارد</td>
            </tr>
              )
            }
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
            {
              showTextNote && (
                <div className="shadow right-0">
                   <button className="btn_red mt-1 mr-1 w-[70px]" 
                        onClick={handlerExitAddNote}
                    ><FaTimes/></button>
                    <div className="box max-w-[50%] mx-auto mt-12">
                        <p className="break-words w-full text-wrap font-danaMedium text-xl text-font-default dark:text-font-200">
                        {textNote}
                        </p>
                    </div>
                </div>
              )
            }
             {showUpdata && (
            <div className="shadow right-0" 
            >
                   <button className="btn_red mt-1 mr-1 w-[70px]" 
                        onClick={handlerExitAddNote}
                    ><FaTimes/></button>
                    <EditNote  
                    id={updataID}
                    />
            </div>
            )}
    </section>
  );
}

export default TableNote;
