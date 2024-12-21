import Navbar from '@/components/modules/Navbar/Navbar'
import Sidebar from '@/components/modules/Sidebar/Sidebar'
import CalendarFa from '@/components/template/panel/Calendar/Calendar'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 my-4">
              <div className="block">
                <CalendarFa
                />
              </div>
              <div className="block bg-white">this is block</div>
              <div className="block bg-slate-500">this is block</div>
            </div>
          </div>
        </div>
    </div>
   </>
  )
}

export default Home