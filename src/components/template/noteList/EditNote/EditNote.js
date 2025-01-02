"use client"
import useNoteStore from '@/zustand/useNoteStore';
import React, { useState } from 'react'

function EditNote({id}) {
    const {updataNote} = useNoteStore()
    const [subject ,setSubject] = useState("");
    const [text , setText ] = useState("");
  
 
    const handlerEditNote =(e)=>{
        e.preventDefault();
        updataNote(id ,subject , text)
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
            <button className='btn_green mt-4 w-full'
            onClick={handlerEditNote}
            >تغییر</button>
        </form>
    </div>
</section>
  )
}

export default EditNote