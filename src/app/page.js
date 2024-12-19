import Navbar from '@/components/modules/Navbar/Navbar'
import Sidebar from '@/components/modules/Sidebar/Sidebar'
import React from 'react'

function Home() {
  return (
   <>
    <Navbar/>
    <div className="grid lg:gap-x-4 xl:gap-x-4 w-full lg:grid-cols-5 xl:grid-cols-5  grid-cols-1 gap-0">
        <div>
          <Sidebar/>
        </div>
        <div className="col-span-4 bg-black">this block</div>
    </div>
   </>
  )
}

export default Home