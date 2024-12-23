import Link from 'next/link'
import React from 'react'

function Register() {
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
                    <input type="text" className='form_input' />
                </div>
                <div className="form_wrapper">
                    <label htmlFor="#" className="form_label"> ایمیل :</label>
                    <input type="text" className='form_input' />
                </div>
                <div className="form_wrapper">
                    <label htmlFor="#" className="form_label"> شماره تلفن :</label>
                    <input type="text" className='form_input' />
                </div>
                <div className="form_wrapper">
                    <label htmlFor="#" className="form_label"> رمزعبور :</label>
                    <input type="text" className='form_input' />
                </div>
                <input type="submit" className='btn_green h-10 w-full mt-4' />
            </form>
        </div>
    </section>
  )
}

export default Register