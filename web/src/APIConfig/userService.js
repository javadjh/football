import axiosConfig, {baseUrl} from "./axiosConfig";
import config from './config.json'

export const getUsersService=(filter)=>{
    return axiosConfig.get(`${baseUrl}${config.users}`, {
        params:filter
    })
}
export const deleteUserService=(id)=>{
    return axiosConfig.delete(`${baseUrl}${config.deleteUser}${id}`)
}
export const upsertUserService=(user)=>{
    return axiosConfig.post(`${baseUrl}${config.upsertUser}`,user)
}
export const getSingleUserService=(id)=>{
    return axiosConfig.get(`${baseUrl}${config.singleUser}${id}`)
}
export const loginService=(user)=>{
    return axiosConfig.post(`${baseUrl}${config.login}`,user)
}
