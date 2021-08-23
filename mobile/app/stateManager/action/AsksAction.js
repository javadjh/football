import {getAsksService} from "../../APIConfig/AskService";

export const getAsksAction = ()=>{
    return async (dispatch,state)=>{
        const {data,status} = await getAsksService()
        if(status===200){
            await dispatch({type:"INIT_ASKS",payload:data})
        }
    }
}
