"use client"
import useTodoStore from '@/zustand/useTodoStore'
import React from 'react'

function CartSubTodo({id , subject , complete}) {
  const {removeTodo , completeTodo} = useTodoStore()
  return (
    <div className="block border p-2 rounded-md border-background-dark mt-4 dark:border-font-100">
    <div className="flex justify-between">
    <span className={complete === true ? "block font-danaBold text-xl text-font-100 line-through" : "block font-danaBold text-xl text-font-100"}>{subject}</span>
    <span className={complete === true ? "block mt-2 font-danaBold text-sm text-secondary-100" :"block mt-2 font-danaBold text-sm text-red-600"}>{complete === true ? "کامل شد" : "کامل نشد"}</span>
    </div>
    <div className="flex items-start justify-end  gap-3 mt-2">
        <button className="flex text-font-default dark:text-font-100 ease-linear duration-300 hover:text-secondary-100 dark:hover:text-secondary-100"
          onClick={()=>{
            completeTodo(id)
          }}
        >انجام شد </button>
        <button className="flex text-font-default dark:text-font-100 ease-linear duration-300 hover:text-red-600 dark:hover:text-red-600"
        onClick={()=>{
          removeTodo(id)
        }}
        >حذف</button>
    </div>
</div>
  )
}

export default CartSubTodo