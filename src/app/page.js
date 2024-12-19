import Navbar from '@/components/modules/Navbar/Navbar'
import React from 'react'

function Home() {
  return (
   <>
    <Navbar/>
    <div className="grid lg:gap-x-4 w-full lg:grid-cols-4 xl:grid-cols4  grid-cols-1 gap-0">
        <div className="block">this block</div>
        <div className="col-span-3">this block</div>
    </div>
   </>
  )
}

export default Home