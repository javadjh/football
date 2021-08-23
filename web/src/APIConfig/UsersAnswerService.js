import axiosConfig, {baseUrl} from "./axiosConfig";
import config from "./config.json";

export const getUsersAnswersService=(filter)=>{
    return axiosConfig.get(`${baseUrl}${config.usersAnswers}`, {
        params:filter
    })
}
export const getSingleUsersAnswerService=(id)=>{
    return axiosConfig.get(`${baseUrl}${config.usersAnswers}/${id}`)
}
export const getDateUsersAnswerService=(date)=>{
    return axiosConfig.get(`${baseUrl}${config.usersAnswerTable}${date}`)
}
