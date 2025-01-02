import { create } from "zustand";

const useNoteStore = create((set)=>({
    notes: [],
    addNote: async (username, subject ,text , date)=>{
        try{
            const res = await fetch('/api/note',{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({username, subject,text,date})
            });
            const data = await res.json();
            if(res.status === 201){
                const newNote = [username , subject , text , date];
                set((state)=>({notes:[...state.notes , newNote]}));
                swal({
                    title:"یاداشت با موفقیت اضافه شد",
                    icon:"success",
                    buttons:"متوجه شدم"
                }).then(()=>{
                    window.location.reload()
                })
            }
        } catch(error){
            console.log("AddNote Failed" , error)
        }
    },
    removeNote : (id)=>{
        swal({
            title:"آیا از حذف یادداشت اطمینان دارید؟",
            icon:"warning",
            buttons:["نه","آره"]
        }).then(async (result)=>{
            if(result){
                const res =await fetch(`/api/note/${id}`,{
                    method: "DELETE"
                });
                if(res.status === 200){
                    set((state)=>({
                        notes: state.notes.filter(note => note._id !== id)
                    }));
                    swal({
                        title:" یادداشت  با موفقیت حذف شد",
                        icon:"success",
                        buttons:"متوجه شدم "
                    }).then(()=>{
                        window.location.reload()
                    })
                }
            }
        })
    },

    updataNote: (id , subject , text)=>{
        swal({
            title:"آیا از تغییر اطمینان دارید ؟",
            icon:"error",
            buttons:["نه","آره"]
        }).then(async(result)=>{
            if(result){
                const res = await fetch(`/api/note/${id}`,{
                    method: "PUT",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({id ,subject , text}),
                });
                if(res.status === 200){
                    set((state)=>({
                        notes: state.notes.map(note=> note._id === id ? {...note}:true)
                    }))
                    swal({
                        title:"تغییر کامل شد",
                        icon:"success",
                        buttons:"متوجه شدم"
                    }).then(()=>{
                        window.location.reload()
                    })
                }
            }
        })
    }
}))

export default useNoteStore;