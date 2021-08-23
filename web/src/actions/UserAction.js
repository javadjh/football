import {getSingleUserService} from "../APIConfig/userService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getUserSingleAction = (id)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {status,data}= await getSingleUserService(id)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_USER",payload:data})
        }
    }
}
export const clearUserSingle = ()=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        await dispatch({type:"INIT_USERS",payload:{
                pageId:1,
                eachPerPage:12,
                users:[]
            }})
        await dispatch(hideLoading())
    }
}
