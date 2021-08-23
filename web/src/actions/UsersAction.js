import {deleteUserService, getUsersService, upsertUserService} from "../APIConfig/userService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getUsersAction = (filter)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await getUsersService(filter)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_USERS",payload:data})
        }
    }
}

export const deletedUserAction = (filter,id)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {status} = await deleteUserService(id)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch(getUsersAction(filter))
        }
    }
}
export const upsertUserAction = (user)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {status} = await upsertUserService(user)
        await dispatch(hideLoading())
    }
}

