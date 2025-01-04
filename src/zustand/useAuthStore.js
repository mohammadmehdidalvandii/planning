import showAlert from "@/utils/ShowAlert";
import { create } from "zustand";


const useAuthStore  = create((set) => ({
    user: null,
    isAuthenticated: false,
    login: async (email, password) => {
        try {
            const res = await fetch("/api/auth/singin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.status === 200) {
                set({ user: data.user, isAuthenticated: true });
                swal({  
                    title:"با موفقیت وارد شدید",
                    icon:"success",
                    button:"پنل کاریری",
                }).then(()=>{
                    window.location.replace("/")
                })
            } 
            if(res.status === 422 || res.status === 419){
                swal({  
                    title:"رمز عبور یا ایمیل نادرست است",
                    icon:"error",
                    button:"تلاش مجدد",
                })
            }
        } catch (error) {
            console.log("Login Failed", error);
        }
    },
    register: async (username , email,  phone ,password) => {
        try {
            const res = await fetch('/api/auth/singup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, email , phone , password }),
            });
            const data = await res.json();
            if (res.status === 201) {
                set({ user: data.user, isAuthenticated: true });
                swal({  
                    title:"حساب کاربری شما با موفقیت ساخت شد",
                    icon:"success",
                    button:"وارد شوید ",
                }).then(()=>{
                    window.location.replace("/Login")
                })
               
            } else if(res.status === 422){
                showAlert("کاربر با این اطلاعات وجود دارد","error","تلاش مجدد")
                
            } else if(res.status === 401){
                showAlert("رمزعبور یا ایمیل اشتباه است ","error","تلاش مجدد")
            }
        } catch (error) {
            console.log("Registration Failed", error);
        }
    },
    logout: () => {
        try{
            swal({
                title:"آیا از خروج مطمئن هستید؟",
                icon:"warning",
                buttons:["نه","آره"]
            }).then(async (result)=>{
                if(result){
                    const res = await fetch('/api/auth/signout',{
                        method :"POST",
                        headers:{
                            "Content-Type" : "application/json"
                        },
                    });
                    if(res.status === 200){
                        set({ user: null, isAuthenticated: false });
                        swal({
                            title:"خروج با موفقیت انجام شد", 
                            icon: "success",
                            buttons:"متوجه شدم"
                        }).then(()=>{
                            window.location.replace("/Login")
                        });
                    }else{
                        showAlert("خروج نا موفق بود ","error","تلاش مجدد")
                    }
                }
            })

        } catch(error){
            console.log("Logout Failed" , error)
        }
    }
}));

export default useAuthStore