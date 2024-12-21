"use client"
import React from "react";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CalendarFa() {
  return (
    <section className="block w-full">
      <div className="box">
        <h6 className="subTitle">تقویم</h6>
        <div className="block mt-4">
          <Calendar
            className="flex items-center justify-center h-auto bg-background-100 dark:bg-background-300"
            calendar={persian}
            locale={persian_fa}
            view="month" 
             type="multiple"
          />
        </div>
      </div>
    </section>
  );
}

export default CalendarFa;
