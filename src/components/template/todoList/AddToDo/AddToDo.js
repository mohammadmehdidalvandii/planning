"use client"
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useTodoStore from '@/zustand/useTodoStore';
import { authUser } from '@/utils/serverHelpers';



function AddToDo() {
    const {addTodo} = useTodoStore()
    const [username , setUserName] = useState("676fe16aefdac86daf5bee65")
    const [subject , setSubject] =useState("");
    const [date , setDate ] = useState("")
    const [complete ,setComplete] = useState(false)
    console.log("data" , date)
    console.log("username" , username)

    useEffect(()=>{
        const getUser = async()=>{
            const user = await authUser();
            if(user){
                setUserName(user._id)
            }
        };
        getUser();
    },[])

    const handlerAddTodo = (e)=>{
        e.preventDefault();

        addTodo( username, subject, date ,complete)
    }
  return (
    <section className="block">
        <div className="box w-[30%] mx-auto mt-24">
            <form action="#" className="block">
                <div className="form_wrapper">
                    <label htmlFor="#" className='form_label'>وظیفه</label>
                    <input type="text"
                    value={subject}
                    onChange={(e)=>{
                        setSubject(e.target.value)
                    }}
                    className='form_input' />
                </div>
                <div className="form_wrapper">
                    <label htmlFor="#" className='form_label'>تاریخ</label>
                    <DatePicker
                         calendar={persian}
                         locale={persian_fa}
                         onChange={(date) => {
                            const dateString = date.format("YYYY/MM/DD");
                            setDate(dateString);       
                        }}
                         className='dataPicker'
                    />
                </div>
                <button className='btn_green mt-4 w-full' 
                onClick={handlerAddTodo}
                >ثبت</button>
            </form>
        </div>
    </section>
  )
}

export default AddToDo