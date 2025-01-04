import { create } from "zustand";

const useInfoStore = create((set)=>({
    info:[],
    changeInfo : async ( id,username , email , phone , password) =>{
        try{
            const res = await fetch(`/api/info/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({username,email,phone,password})
            });
            if(res.status === 200){
                set({
                    info: state.info.map(user => user._id === id ? { ...user } : true)
                });
                swal({
                    title: "تغییر اطلاعات کامل شد",
                    icon:"success",
                    buttons:"متوجه شدم"
                }).then(()=>{
                    window.location.reload()
                })
            }
        } catch(error){
            console.log("Change Info Failed" , error)
        }
    }
}));


export default useInfoStore