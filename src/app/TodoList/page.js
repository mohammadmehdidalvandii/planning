import Navbar from '@/components/modules/Navbar/Navbar'
import Sidebar from '@/components/modules/Sidebar/Sidebar'
import TableTodo from '@/components/template/todoList/TableTodo/TableTodo'
import connectDB from '@/config/db'
import React from 'react'
import TodoModel from '@/models/Todo'
import { authUser } from '@/utils/serverHelpers'

async function page() {
  await  connectDB()

  const user = await authUser();
  const todos = await TodoModel.find({username:user?._id})

  return (
    <>
         <Navbar user={user}/>
    <div className="grid lg:gap-x-4 xl:gap-x-4 w-full lg:grid-cols-5 xl:grid-cols-5  grid-cols-1 gap-0">
        <div>
          <Sidebar/>
        </div>
        <div className="col-span-4">
          <div className="container">
                <TableTodo id={user?._id}  todos={todos}/>
          </div>
        </div>
    </div>
    </>
  )
}

export default page