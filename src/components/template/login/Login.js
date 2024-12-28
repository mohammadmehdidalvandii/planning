"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import useAuthStore from '@/zustand/useAuthStore';

function Login() {
    const {login} = useAuthStore()
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    console.log("email - password" , email , password)

    const handlerLogin = (e)=>{
        e.preventDefault();
        login(email , password)
    }


  return (
    <section className="block mx-auto mt-12 w-full px-2 md:w-[400px] xl:w-[450px]"> 
    <div className="box">
        <div className="block text-center pb-4 border-b">
            <h6 className="subTitle font-danaBlack text-2xl">ورود</h6>
        </div>
        <form action="#" className="block">
            <div className="form_wrapper">
                <label htmlFor="#" className="form_label"> ایمیل:</label>
                <input type="text"
                    value={email}
                    onChange={event=> setEmail(event.target.value)}
                className='form_input' />
            </div>
            <div className="form_wrapper">
                <label htmlFor="#" className="form_label"> رمزعبور :</label>
                <input type="text"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                className='form_input' />
            </div>
            <p className="flex items-center mt-4 font-danaBold text-sm text-font-default dark:text-font-100"> اگرحساب کاربری ندارید ؟ <Link href="/Register" className='text-secondary-100 duration-300 ease-linear hover:text-primary-100'>ثبت نام</Link></p>

            <button  className='btn_green h-10 w-full mt-4'
            onClick={handlerLogin}
            >ورود</button>
        </form>
    </div>
</section>
  )
}

export default Login