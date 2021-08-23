
export const UsersAnswerReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_USERS_ANSWER":
            return {...action.payload}
        default:
            return state
    }

}
