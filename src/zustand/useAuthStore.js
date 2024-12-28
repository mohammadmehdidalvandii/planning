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
                    showAlert("حساب کاربری شما با موفقیت ساخت شد","success","وارد شوید")
                    window.location.replace("/Login")
               
            } else if(res.status === 422){
                showAlert("کاربر با این اطلاعات وجود دارد","error","تلاش مجدد")

            }
        } catch (error) {
            console.log("Registration Failed", error);
        }
    },
    logout: () => set({ user: null, isAuthenticated: false })
}));

export default useAuthStore