import axiosConfig from "./axiosConfig";
import config from "./config.json";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const getAsksService= async ()=>{
    //return axiosConfig.get(`${config.baseUrl}${config.asks}`)
    return await axios.get(`${config.baseUrl}${config.asks}`,{
        headers:{
            "Content-Type":"application/json",
            "token": await SecureStore.getItemAsync('secure_token')
        }
    })
}
