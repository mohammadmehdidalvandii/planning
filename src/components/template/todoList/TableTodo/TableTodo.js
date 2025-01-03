"use client"
import React, { useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';
import { FaTimes } from 'react-icons/fa';
import useTodoStore from '@/zustand/useTodoStore';


function TableTodo({todos ,id}) {
    const {removeTodo , completeTodo} = useTodoStore()
    const [showAddTodos , setShowAddTodos] = useState(false);

    const handlerRemoveTodo = (todoID)=>{
        // e.preventDefault() 
        removeTodo(todoID)

    }

    const handlerCompleteTodo = (todoID)=>{
        completeTodo(todoID)
    }

    const handlerShowAddTodo = ()=>{
        setShowAddTodos(true)
    }
    const handlerExitAddTodo = ()=>{
        setShowAddTodos(false)
    }


  return (
        <section className="block w-full mt-4">
            <div className="box">
                <div className="flex items-center justify-between ">
                    <h6 className="subTitle">لیست وظیفه</h6>
                    <button className="btn_blue" 
                        onClick={handlerShowAddTodo}
                    >افزودن</button>
                </div>
                <table className="min-w-full bg-white border border-font-100 dark:border-background-200 mt-4">
            <thead>
                <tr className="bg-background-dark text-font-200 dark:bg-background-300 dark:text-font-default">
                    <th className="px-2 py-3 text-center">موضوع</th>
                    <th className="px-2 py-3 text-center">تاریخ</th>
                    <th className="px-2 py-3 text-center">وضعیت</th>
                    <th className="px-2 py-3 text-center">عملیات</th>
                </tr>
            </thead>
            <tbody className="text-font-default dark:text-font-100 text-base font-danaMedium">
            {
        todos.length > 0 ? (
            todos.slice().reverse().map((todo) => (
                <tr className="border-b bg-background-300 dark:bg-background-dark" key={todo._id}>
                    <td className={todo.complete === true ? "px-2 py-3 text-center line-through " :"px-2 py-3 text-center"}>{todo.subject}</td>
                    <td className="px-2 py-3 text-center">{todo.date}</td>
                    <td className={todo.complete === true ? "px-2 py-3 text-center text-secondary-100 text-xl" :"px-2 py-3 text-center text-xl   text-red-600"}>
                        {todo.complete === false ? "کامل نشد" : "کامل شد "}
                    </td>
                    <td className="flex items-center justify-center flex-col md:flex-row  px-2 py-3 text-center gap-2">
                        <button className="btn_green h-10 w-[100px]"
                        onClick={()=>handlerCompleteTodo(todo._id)}
                        >انجام شد</button>
                        <button className="btn_red h-10 w-[100px]"
                        onClick={()=>handlerRemoveTodo(todo._id)}
                        >حذف شود</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan="4" className="px-2 py-3 text-center font-danaBlack text-4xl text-red-600">تودو وجود ندارد</td>
            </tr>
        )
    }

            </tbody>
        </table>
            </div>
            {showAddTodos && (
            <div className="shadow right-0" 
            >
                   <button className="btn_red mt-1 mr-1 w-[70px]" 
                        onClick={handlerExitAddTodo}
                    ><FaTimes/></button>
                <AddToDo 
                userID={id}
                />
            </div>
            )}
        </section>
  )
}

export default TableTodo