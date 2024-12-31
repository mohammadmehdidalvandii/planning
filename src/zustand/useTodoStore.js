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
    },

    removeTodo :  (id)=>{
        try{
            swal({
                title:"آیا از حذف تودو اطمینان دارید ؟",
                icon:"warning",
                buttons:["نه","آره"]
            }).then(async (result)=>{
                if(result){
                    const res = await fetch(`/api/todo/${id}` , {
                        method: "DELETE",
                    });
                    if(res.status === 200){
                        set((state)=>({
                            todos: state.todos.filter(todo => todo._id !== id)
                        }));
                        swal({
                            title:"تود و با موفقیت حذف شد",
                            icon:"success",
                            buttons:"متوجه شدم "
                        }).then(()=>{
                            window.location.reload()
                        })
                    }
                }
            })
           
        } catch(error){
            console.log("RemoveTodo Failed" , error)
        }
    },
    completeTodo : (id)=>{
        try{
            swal({
                title:"آیا از تکمیل تودو اطمینان دارید ؟",
                icon:"error",
                buttons:["نه","آره"]
            }).then(async (result)=>{
                if(result){
                    const res = await fetch(`/api/todo/${id}` , {
                        method: "PUT",
                        headers:{
                            "Content-Type":"application/json",
                        }
                    });
                    if(res.status === 200 ){
                        set((state)=>({
                            todos: state.todos.map(todo => todo._id === id ? {...todo  }: true
                        )}));
                        swal({
                            title:"تودو کامل شد",
                            icon:"success",
                            buttons:"متوجه شدم"
                        }).then(()=>{
                            window.location.reload()
                        })
                    }
                }
            })
        } catch(error){
            console.log("Complete Todo Failed" ,error)
        }
    }
}));


export default useTodoStore