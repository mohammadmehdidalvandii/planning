import CartSubTodo from '@/components/modules/CartSubTodo/CartSubTodo'
import React from 'react'

function LastTodo() {
  return (
    <section className="block w-full">
    <div className="box">
        <h6 className="subTitle">آخرین  لسیت وظیفه </h6>
       <CartSubTodo/>
       <CartSubTodo/>
       <CartSubTodo/>
    </div>
</section>
  )
}

export default LastTodo