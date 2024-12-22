import React from 'react'

function Change() {
  return (
    <section className="block w-full mt-4 mb-2">
        <div className="box">
           <h6 className="subTitle">تغییر اطلاعات </h6>
           <form action="#" className="block mt-4">
                <div className="block mb-6">
                    <label htmlFor="#" className='block font-danaMedium text-sm font-extrabold text-font-default dark:text-font-200'>نام کاربری</label>
                    <input type="text" className='block w-full h-10 bg-background-300 mt-2 rounded-md font-danaMedium text-base outline-none pr-2 dark:bg-success-default dark:text-font-100'/>
                </div>
                <div className="block mb-6">
                    <label htmlFor="#" className='block font-danaMedium text-sm font-extrabold text-font-default dark:text-font-200'>email</label>
                    <input type="text" className='block w-full h-10 bg-background-300 mt-2 rounded-md font-danaMedium text-base outline-none pr-2 dark:bg-success-default dark:text-font-100'/>
                </div>
                <div className="block mb-6">
                    <label htmlFor="#" className='block font-danaMedium text-sm font-extrabold text-font-default dark:text-font-200'>شماره همراه</label>
                    <input type="text" className='block w-full h-10 bg-background-300 mt-2 rounded-md font-danaMedium text-base outline-none pr-2 dark:bg-success-default dark:text-font-100'/>
                </div>
                <div className="block mb-6">
                    <label htmlFor="#" className='block font-danaMedium text-sm font-extrabold text-font-default dark:text-font-200'>رمز عبور</label>
                    <input type="text" className='block w-full h-10 bg-background-300 mt-2 rounded-md font-danaMedium text-base outline-none pr-2 dark:bg-success-default dark:text-font-100'/>
                </div>
                <button className="btn_green w-full">ثبت</button>
           </form>
        </div>
    </section>
  )
}

export default Change