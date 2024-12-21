import CartSubNote from '@/components/modules/CartSubNote/CartSubNote'
import React from 'react'

function LastNote() {
  return (
    <section className="block w-full">
        <div className="box">
            <h6 className="subTitle">آخرین یاد داشت ها </h6>
           <CartSubNote/>
           <CartSubNote/>
           <CartSubNote/>
        </div>
    </section>
  )
}

export default LastNote