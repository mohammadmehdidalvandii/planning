import CartSubTodo from '@/components/modules/CartSubTodo/CartSubTodo'
import connectDB from '@/config/db'
import React from 'react'
import TodoModel from '@/models/Todo';
import { authUser } from '@/utils/serverHelpers';

async function LastTodo() {
  await connectDB();

  const user = await authUser();
  const todos = await TodoModel.find({username:user?._id})

  return (
    <section className="block w-full">
    <div className="box">
        <h6 className="subTitle">آخرین  لسیت وظیفه </h6>
        {todos.length > 0 ?(
          todos.reverse().slice(0,3).map((todo)=>(
            <CartSubTodo 
            key={todo._id}
            id={todo._id}
            subject={todo.subject}
            date={todo.date}
            complete={todo.complete}
            />

          ))
        ) : (
          <p colSpan="4" className="px-2 py-3 text-center font-danaBlack text-2xl text-red-600">تودوی وجود ندارد</p>
        )}
    </div>
</section>
  )
}

export default LastTodo