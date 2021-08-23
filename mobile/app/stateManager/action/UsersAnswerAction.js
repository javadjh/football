import {
    canInsertUsersAnswerService,
    getUsersAnswersService,
    singletUsersAnswerService
} from "../../APIConfig/UsersAnswerService";

export const getUsersAnswerAction = (filter)=>{
    return async (dispatch,getState)=>{
        const {data,status} = await getUsersAnswersService(filter)
        if(status===200){
            let usersAnswerState = []
            if(getState.usersAnswers){
                usersAnswerState = getState.usersAnswers.usersAnswers
                usersAnswerState = usersAnswerState.concat(data.usersAnswers)
            }else{
                usersAnswerState = data.usersAnswers
            }
            await dispatch({type:"INIT_USERS_ANSWERS",payload: {
                    pageId:data.pageId,
                    eachPerPage:data.eachPerPage,
                    usersAnswers:usersAnswerState
                }})
        }
    }
}

export const setCanInsertAction = ()=>{
    return async (dispatch,state)=>{
        const {data,status} = await canInsertUsersAnswerService()
        if(status===200){
            await dispatch({type:"INIT_CAN_INSERT",payload:data})
        }
    }
}
export const singleUsersAnswerAction = (id)=>{
    return async (dispatch,state)=>{
        const {data,status} = await singletUsersAnswerService(id)
        if(status===200){
            await dispatch({type:"INIT_SINGLE_USERS_ANSWER",payload:data})
        }
    }
}
