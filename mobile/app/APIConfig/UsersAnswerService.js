import axiosConfig from "./axiosConfig";
import config from './config.json'
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const getUsersAnswersService = async (filter)=>{
    /*return axiosConfig.get(`${config.baseUrl}${config.usersAnswer}`,{
        params:filter
    })*/
    return await axios.get(`${config.baseUrl}${config.usersAnswer}`,{
        headers:{
            "Content-Type":"application/json",
            "token": await SecureStore.getItemAsync('secure_token')
        },
        params:filter
    })
}
export const insertUsersAnswersService = async (usersAnswer)=>{
    //return axiosConfig.post(`${config.baseUrl}${config.insertUsersAnswer}`,usersAnswer)
    return await axios.post(`${config.baseUrl}${config.insertUsersAnswer}`,usersAnswer,{
        headers:{
            "Content-Type":"application/json",
            "token": await SecureStore.getItemAsync('secure_token')
        }
    })
}
export const canInsertUsersAnswerService = async ()=>{
    //return axiosConfig.get(`${config.baseUrl}${config.canInsertUsersAnswer}`)
    return await axios.get(`${config.baseUrl}${config.canInsertUsersAnswer}`,{
        headers:{
            "Content-Type":"application/json",
            "token": await SecureStore.getItemAsync('secure_token')
        }
    })
}
export const singletUsersAnswerService = async (id)=>{
    //return axiosConfig.get(`${config.baseUrl}${config.singleUsersAnswer}${id}`)
    return await axios.get(`${config.baseUrl}${config.singleUsersAnswer}${id}`,{
        headers:{
            "Content-Type":"application/json",
            "token": await SecureStore.getItemAsync('secure_token')
        }
    })
}
