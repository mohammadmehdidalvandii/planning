"use client"
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useNoteStore from '@/zustand/useNoteStore';
import { authUser } from '@/utils/serverHelpers';
import connectDB from '@/config/db';

function AddNote() {
    const {addNote} = useNoteStore();
    const [username ,  setUsername] = useState("676fe16aefdac86daf5bee65");
    const [subject , setSubject] = useState("");
    const [text , setText] = useState("");
    const [date , setDate] = useState("");

    console.log("username" ,username)

     useEffect(()=>{
       const getUser = async()=>{
           const user = await authUser();
           if(user){
               setUsername(user._id)
           }else{
        console.log("user not found")
           }
       };
       getUser();
     },[]);

    const handlerAddNote = (e)=>{
        e.preventDefault()
        addNote(username,subject,text,date);
    }

  return (
    <section className="block">
    <div className="box w-[30%] mx-auto mt-24">
        <form action="#" className="block">
            <div className="form_wrapper">
                <label htmlFor="#" className='form_label'>موضوع</label>
                <input type="text"
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                className='form_input'  />
            </div>
            <div className="form_wrapper">
                <label htmlFor="#" className='form_label'>یادداشت</label>
                <textarea name="#" 
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className='block w-full h-[250px] mt-2 pr-3 pt-3 outline-none rounded-lg  text-font-default dark:text-font-100 bg-background-300 dark:bg-success-default'></textarea>
            </div>
            <div className="form_wrapper">
                <label htmlFor="#" className='form_label'>تاریخ</label>
                <DatePicker
                     onChange={(date) => {
                        const dateString = date.format("YYYY/MM/DD");
                        setDate(dateString);       
                    }}
                     calendar={persian}
                     locale={persian_fa}
                     className='dataPicker'
                />
            </div>
            <button className='btn_green mt-4 w-full'
            onClick={handlerAddNote}
            >ثبت</button>
        </form>
    </div>
</section>
  )
}

export default AddNote