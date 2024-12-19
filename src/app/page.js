import Navbar from '@/components/modules/Navbar/Navbar'
import Sidebar from '@/components/modules/Sidebar/Sidebar'
import Welcome from '@/components/template/panel/Welcome/Welcome'
import React from 'react'

function Home() {
  return (
   <>
    <Navbar/>
    <div className="grid lg:gap-x-4 xl:gap-x-4 w-full lg:grid-cols-5 xl:grid-cols-5  grid-cols-1 gap-0">
        <div>
          <Sidebar/>
        </div>
        <div className="col-span-4">
          <div className="container">
            <Welcome/>
          </div>
        </div>
    </div>
   </>
  )
}

export default Home