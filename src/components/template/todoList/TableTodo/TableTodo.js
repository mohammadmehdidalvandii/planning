import Link from 'next/link'
import React from 'react'

function TableTodo() {
  return (
        <section className="block w-full mt-4">
            <div className="box">
                <div className="flex items-center justify-between ">
                    <h6 className="subTitle">لیست وظیفه</h6>
                    <Link href='/AddTodo' className='btn_blue'>افزودن</Link>
                </div>
                <table className="min-w-full bg-white border border-font-100 dark:border-background-200 mt-4">
            <thead>
                <tr className="bg-background-dark text-font-200 dark:bg-background-300 dark:text-font-default">
                    <th className="px-2 py-3 text-center">موضوع</th>
                    <th className="px-2 py-3 text-center">تاریخ</th>
                    <th className="px-2 py-3 text-center">عملیات</th>
                </tr>
            </thead>
            <tbody className="text-font-default dark:text-font-100 text-base font-danaMedium">
                <tr className="border-b bg-background-300 dark:bg-background-dark">
                    <td className="px-2 py-3 text-center">عملیات 1</td>
                    <td className="px-2 py-3 text-center">1402/01/01</td>
                    <td className="flex items-center justify-center flex-col md:flex-row  px-2 py-3 text-center gap-2">
                        <button className="btn_green h-10 w-[100px]">انجام شد</button>
                        <button className="btn_red h-10 w-[100px]">حذف شود</button>
                    </td>
                </tr>
                <tr className="border-b bg-background-300 dark:bg-background-dark">
                    <td className="px-2 py-3 text-center">عملیات 2</td>
                    <td className="px-2 py-3 text-center">1402/01/02</td>
                    <td className="flex items-center justify-center flex-col md:flex-row px-2 py-3 text-center gap-2">
                        <button className="btn_green h-10 w-[100px]">انجام شد</button>
                        <button className="btn_red h-10 w-[100px]">حذف شود</button>
                    </td>
                </tr>
            </tbody>
        </table>
            </div>
        </section>
  )
}

export default TableTodo