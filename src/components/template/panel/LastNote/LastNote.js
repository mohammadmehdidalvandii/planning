import CartSubNote from '@/components/modules/CartSubNote/CartSubNote'
import connectDB from '@/config/db'
import React from 'react'
import NoteModel from '@/models/Note';



async function LastNote() {
  await connectDB();

  const notes = await NoteModel.find({})


  return (
    <section className="block w-full">
        <div className="box">
            <h6 className="subTitle">آخرین یاد داشت ها </h6>
            {
              notes.length > 0 ? (
                notes.reverse().slice(0,3).map(note=>(
                  <CartSubNote key={note._id}
                  id={note._id}
                  subject={note.subject}
                  text={note.text}
                  />
                ))
              ):(
                <p colSpan="4" className="px-2 py-3 text-center font-danaBlack text-2xl text-red-600">یادداشت وجود ندارد</p>

              )
            }
        
        </div>
    </section>
  )
}

export default LastNote