import {upsertUserService} from "../APIConfig/userService";
import {
    getDateUsersAnswerService,
    getSingleUsersAnswerService,
    getUsersAnswers,
    getUsersAnswersService
} from "../APIConfig/UsersAnswerService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getUsersAnswersAction = (filter)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {status,data} = await getUsersAnswersService(filter)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_USERS_ANSWERS",payload:data})
        }

    }
}
export const getSingleUsersAnswerAction = (id)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {status,data} = await getSingleUsersAnswerService(id)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_USERS_ANSWER",payload:data})
        }

    }
}
export const getDateUsersAnswerAction = (date)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {status,data} = await getDateUsersAnswerService(date)
        await dispatch(hideLoading())
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_DATE_USERS_ANSWER",payload:data})
        }


    }
}
