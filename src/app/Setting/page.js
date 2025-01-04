import Navbar from '@/components/modules/Navbar/Navbar'
import Sidebar from '@/components/modules/Sidebar/Sidebar'
import Change from '@/components/template/settting/Change/Change'
import connectDB from '@/config/db'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

async function page() {
  await connectDB();

  const user = await authUser()

  return (
    <>
    <Navbar user={user}/>
<div className="grid lg:gap-x-4 xl:gap-x-4 w-full lg:grid-cols-5 xl:grid-cols-5  grid-cols-1 gap-0">
   <div>
     <Sidebar user={user}/>
   </div>
   <div className="col-span-4">
     <div className="container">
           <Change/>
     </div>
   </div>
</div>
</>
  )
}

export default page