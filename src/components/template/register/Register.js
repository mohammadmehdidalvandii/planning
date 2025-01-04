"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import useAuthStore from '@/zustand/useAuthStore'
import showAlert from '@/utils/ShowAlert';
import { validationEmail ,validationPassword ,validationPhone } from '@/utils/auth';

function Register() {
const {register} = useAuthStore();
const [username , setUsername] = useState("")
const [email , setEmail] = useState("")
const [phone , setPhone] = useState("")
const [password , setPassword] = useState("")

    const handlerRegister = async (e) =>{
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
            register(username , email , phone , password)
        }


    }



  return (
    <section className="block mx-auto mt-12 w-full px-2 md:w-[400px] xl:w-[450px]"> 
        <div className="box">
            <div className="block text-center pb-4 border-b">
                <h6 className="subTitle font-danaBlack text-2xl">ثبت نام</h6>
                <p className="flex items-center mt-2 font-danaBold text-sm text-font-default dark:text-font-100"> آیا حساب کاربری دارید ؟  <Link href="/Login" className='text-secondary-100 duration-300 ease-linear hover:text-primary-100'>ورود</Link></p>
            </div>
            <form action="#" className="block">
                <div className="form_wrapper">
                    <label htmlFor="#" className="form_label">نام کاربری :</label>
                    <input type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}                    
                    className='form_input' />
                </div>
                <div className="form_wrapper">
                    <label htmlFor="#" className="form_label"> ایمیل :</label>
                    <input type="text"
                    value={email}
                    onChange={event => setEmail(event.target.value)}                    
                    className='form_input' />
                </div>
                <div className="form_wrapper">
                    <label htmlFor="#" className="form_label"> شماره تلفن :</label>
                    <input type="text"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}                    
                    className='form_input' />
                </div>
                <div className="form_wrapper">
                    <label htmlFor="#" className="form_label"> رمزعبور :</label>
                    <input type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}                    
                    className='form_input' />
                </div>
                <button  className='btn_green h-10 w-full mt-4'
                onClick={handlerRegister}
                >ثبت نام</button>

            </form>
        </div>
    </section>
  )
}

export default Register