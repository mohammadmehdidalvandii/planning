import React from 'react'

function CartSubNote() {
  return (
    <div className="block border p-2 rounded-md border-background-dark mt-4 dark:border-font-100">
    <span className="block font-danaBold text-xl text-font-100">نحوه ادیت کردن ویدیو با این شات</span>
    <div className="flex items-start justify-end  gap-3 mt-2">
        <button className="flex text-font-default dark:text-font-100 ease-linear duration-300 hover:text-secondary-100 dark:hover:text-secondary-100">مشاهده</button>
        <button className="flex text-font-default dark:text-font-100 ease-linear duration-300 hover:text-red-600 dark:hover:text-red-600">حذف</button>
        <button className="flex text-font-default dark:text-font-100 ease-linear duration-300 hover:text-primary-100 dark:hover:text-primary-100">ویرایش</button>
    </div>
</div>
  )
}

export default CartSubNote