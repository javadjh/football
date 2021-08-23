export const UsersAnswerReducer = (state={
    pageId:1,
    eachPerPage:12,
    usersAnswers:[]
},action)=>{
    switch (action.type){
        case "INIT_USERS_ANSWERS":
            return {...action.payload}
        default:
            return state
    }
}
