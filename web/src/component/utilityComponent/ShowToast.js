import {toast} from "react-toastify";

export const doneToast = (message)=>{
    toast.success(message,{
        closeOnClick:true
    })
}
export const errorToast = (message)=>{
    toast.error(message,{
        closeOnClick:true
    })
}