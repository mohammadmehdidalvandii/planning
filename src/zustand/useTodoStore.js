import { create } from "zustand";

const useTodoStore = create((set)=>({
    todos: [],

    addTodo : async(username , subject , date , complete)=>{
        try{
            const res = await fetch("/api/todo",{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify({username , subject , date , complete}),
            });
            const data = await res.json()
            if(res.status === 201){
                const newTodo = [username , subject , date , complete]
                set((state)=>({todos:[...state.todos , newTodo]}))
                swal({
                    title:"تو دو با موفقیت اضافه شد",
                    icon:"success",
                    buttons:"متوجه شدم"
                }).then(()=>{
                    window.location.reload()
                })
            }

        } catch(error){
            console.log("AddTodo Failed" , error)
        }
    }
}));


export default useTodoStore