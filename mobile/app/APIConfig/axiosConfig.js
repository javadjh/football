import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';
axios.defaults.headers.post['Content-Type']="application/json"
axios.defaults.headers.common['token']= SecureStore.getItemAsync('secure_token');
axios.interceptors.response.use(null,error=>{
    if(error){
        // errorToast("خطا در دریافت اطلاعات رخ داده است")

        console.log(error)
    }
    return Promise.reject(error)
})
export default {
    post:axios.post,
    get:axios.get,
    put:axios.put,
    delete:axios.delete
}
