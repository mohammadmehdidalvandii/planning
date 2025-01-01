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
    }
}))

export default useNoteStore;