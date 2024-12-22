import Link from "next/link";
import React from "react";

function TableNote() {
  return (
    <section className="block w-full mt-4">
      <div className="box">
        <div className="flex items-center justify-between ">
          <h6 className="subTitle">لیست یادداشت</h6>
          <Link href="/AddTodo" className="btn_blue">
            افزودن
          </Link>
        </div>
        <table className="min-w-full bg-white border border-font-100 dark:border-background-200 mt-4">
          <thead>
            <tr className="bg-background-dark text-font-200 dark:bg-background-300 dark:text-font-default">
              <th className="px-2 py-3 text-center">موضوع</th>
              <th className="px-2 py-3 text-center">شرح</th>
              <th className="px-2 py-3 text-center">تاریخ</th>
              <th className="px-2 py-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody className="text-font-default dark:text-font-100 text-base font-danaMedium">
            <tr className="border-b bg-background-300 dark:bg-background-dark">
              <td className="px-2 py-3 text-center">عملیات 1</td>
              <td className="px-2 py-3 text-center">
                <button className="bg-primary-default text-background-100 py-1 px-3 rounded hover:bg-primary-100">
                  مشاهده
                </button>
              </td>
              <td className="px-2 py-3 text-center">1402/01/01</td>
              <td className="flex items-center justify-center flex-col md:flex-row  px-2 py-3 text-center gap-2">
                <button className="bg-green-500 text-background-100 py-1 px-3 rounded hover:bg-green-600">
                   ویرایش
                </button>
                <button className="bg-red-500 text-background-100 py-1 px-3 rounded hover:bg-red-600">
                  حذف شود
                </button>
              </td>
            </tr>
            <tr className="border-b bg-background-300 dark:bg-background-dark">
              <td className="px-2 py-3 text-center">عملیات 2</td>
              <td className="px-2 py-3 text-center">
                <button className="bg-primary-default text-background-100 py-1 px-3 rounded hover:bg-primary-100">
                  مشاهده
                </button>
              </td>
              <td className="px-2 py-3 text-center">1402/01/02</td>
              <td className="flex items-center justify-center flex-col md:flex-row px-2 py-3 text-center gap-2">
                <button className="bg-green-500 text-background-100 py-1 px-3 rounded hover:bg-green-600">
                 ویرایش
                </button>
                <button className="bg-red-500 text-background-100 py-1 px-3 rounded hover:bg-red-600">
                  حذف شود
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TableNote;
