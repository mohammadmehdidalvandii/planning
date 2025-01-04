"use client"
import { validationEmail, validationPassword, validationPhone } from '@/utils/auth';
import showAlert from '@/utils/ShowAlert';
import useInfoStore from '@/zustand/useInfoStore';
import React, { useState } from 'react'

function Change({id}) {
    console.log("id" ,id)
    const {changeInfo} = useInfoStore()
const [username , setUsername] = useState("");
const [email , setEmail] = useState("");
const [phone , setPhone] = useState("");
const [password , setPassword] = useState("");

const handlerChangeInfo = (e)=>{
    e.preventDefault();
    if(!username.trim() || !email.trim() || !phone.trim() || !password.trim()){
        showAlert("مقدار تمام فیلد ها اجباری است","error","تلاش مجدد")
    }else if(!validationEmail(email) ){
        showAlert("مقدار ایمیل درست نیست","error","تلاش مجدد")
    }else if(!validationPassword(password)){
        showAlert(" لاتین باشد-مقدار رمزعبور باید شامل یک حروف بزرگ - عدد - ویک علامت خاص @ - ! - $","error","تلاش مجدد")
    } else if(!validationPhone(phone)){
        showAlert("مقدار فیلد تلفن درست نیست","error","تلاش مجدد")
    }else{
        changeInfo( id,username , email , phone , password)
    }
}



  return (
    <section className="block w-full mt-4 mb-2">
        <div className="box">
           <h6 className="subTitle">تغییر اطلاعات </h6>
           <form action="#" className="block mt-4">
                <div className="block mb-6">
                    <label htmlFor="#" className='block font-danaMedium text-sm font-extrabold text-font-default dark:text-font-200'>نام کاربری</label>
                    <input type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    className='block w-full h-10 bg-background-300 mt-2 rounded-md font-danaMedium text-base outline-none pr-2 dark:bg-success-default dark:text-font-100'/>
                </div>
                <div className="block mb-6">
                    <label htmlFor="#" className='block font-danaMedium text-sm font-extrabold text-font-default dark:text-font-200'>email</label>
                    <input type="text"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    className='block w-full h-10 bg-background-300 mt-2 rounded-md font-danaMedium text-base outline-none pr-2 dark:bg-success-default dark:text-font-100'/>
                </div>
                <div className="block mb-6">
                    <label htmlFor="#" className='block font-danaMedium text-sm font-extrabold text-font-default dark:text-font-200'>شماره همراه</label>
                    <input type="text"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                    className='block w-full h-10 bg-background-300 mt-2 rounded-md font-danaMedium text-base outline-none pr-2 dark:bg-success-default dark:text-font-100'/>
                </div>
                <div className="block mb-6">
                    <label htmlFor="#" className='block font-danaMedium text-sm font-extrabold text-font-default dark:text-font-200'>رمز عبور</label>
                    <input type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    className='block w-full h-10 bg-background-300 mt-2 rounded-md font-danaMedium text-base outline-none pr-2 dark:bg-success-default dark:text-font-100'/>
                </div>
                <button className="btn_green w-full"
                onClick={handlerChangeInfo}
                >ثبت</button>
           </form>
        </div>
    </section>
  )
}

export default Change