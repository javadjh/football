import axiosConfig, {baseUrl} from "./axiosConfig";
import config from "./config.json";

export const getAsksService=()=>{
    return axiosConfig.get(`${baseUrl}${config.asks}`)
}
export const deleteAskService=(id)=>{
    return axiosConfig.delete(`${baseUrl}${config.deleteAsk}${id}`)
}
export const upsertAskService=(ask)=>{
    return axiosConfig.post(`${baseUrl}${config.upsertAsk}`,ask)
}
