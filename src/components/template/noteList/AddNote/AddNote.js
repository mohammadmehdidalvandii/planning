import React from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function addNote() {
  return (
    <section className="block">
    <div className="box w-[30%] mx-auto mt-24">
        <form action="#" className="block">
            <div className="form_wrapper">
                <label htmlFor="#" className='form_label'>موضوع</label>
                <input type="text" className='form_input'  />
            </div>
            <div className="form_wrapper">
                <label htmlFor="#" className='form_label'>یادداشت</label>
                <textarea name="#" className='block w-full h-[250px] mt-2 pr-3 pt-3 outline-none rounded-lg  text-font-default dark:text-font-100 bg-background-300 dark:bg-success-default'></textarea>
            </div>
            <div className="form_wrapper">
                <label htmlFor="#" className='form_label'>تاریخ</label>
                <DatePicker
                     calendar={persian}
                     locale={persian_fa}
                     className='dataPicker'
                />
            </div>
            <button className='btn_green mt-4 w-full'>ثبت</button>
        </form>
    </div>
</section>
  )
}

export default addNote