import axios from "axios";
import {errorToast} from "../component/utilityComponent/ShowToast";
axios.defaults.headers.post['Content-Type']="application/json"
axios.defaults.headers.common['token']=localStorage.getItem("token")
axios.interceptors.response.use(null,error=>{
    if(error){
        errorToast("can not get data from server")
    }
    return Promise.reject(error)
})

export const baseUrl = localStorage.getItem("ip")

export default {
    post:axios.post,
    get:axios.get,
    put:axios.put,
    delete:axios.delete
}
