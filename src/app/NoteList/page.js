import Navbar from '@/components/modules/Navbar/Navbar'
import Sidebar from '@/components/modules/Sidebar/Sidebar'
import TableNote from '@/components/template/noteList/TableNote/TableNote'
import React from 'react'
import NoteModel from '@/models/Note';
import connectDB from '@/config/db';
import { authUser } from '@/utils/serverHelpers';


 async function page() {
  await connectDB()
  const user = await authUser();
  
  const notes = await NoteModel.find({username:user?._id});
 
  return (
    <>
    <Navbar user={user}/>
<div className="grid lg:gap-x-4 xl:gap-x-4 w-full lg:grid-cols-5 xl:grid-cols-5  grid-cols-1 gap-0">
   <div>
     <Sidebar user={user}/>
   </div>
   <div className="col-span-4">
     <div className="container">
           <TableNote id={user?._id} notes={notes}/>
     </div>
   </div>
</div>
</>
  )
}

export default page