import axiosConfig from "./axiosConfig";
import config from './config.json'
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const loginService= async (user)=>{
    //return axiosConfig.post(`${config.baseUrl}${config.login}`,user)
    return await axios.post(`${config.baseUrl}${config.login}`,user,{
        headers:{
            "Content-Type":"application/json",
            "token": await SecureStore.getItemAsync('secure_token')
        }
    })
}
