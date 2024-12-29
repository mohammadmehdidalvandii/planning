import React from 'react'
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function AddToDo() {
  return (
    <section className="block">
        <div className="box w-[30%] mx-auto mt-24">
            <form action="#" className="block">
                <div className="form_wrapper">
                    <label htmlFor="#" className='form_label'>وظیفه</label>
                    <input type="text" className='form_input' />
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

export default AddToDo