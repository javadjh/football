import {deleteAskService, getAsksService, upsertAskService} from "../APIConfig/AskService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getAsksAction = ()=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await getAsksService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_ASKS",payload:data})
        }
    }
}
export const deleteAskAction = (id)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await deleteAskService(id)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch(getAsksAction())
        }
    }
}
export const upsertAskAction = (ask)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await upsertAskService(ask)
        await dispatch(hideLoading())
    }
}

export const setSingleAskAction = (ask) =>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        await dispatch({type:"INIT_SET_ASK_SINGLE",payload:ask})
        await dispatch(hideLoading())
    }
}


export const clearSingleAskAction = () =>{
    return async (dispatch,state)=>{
        await dispatch({type:"INIT_SET_ASK_SINGLE",payload:{}})
    }
}
