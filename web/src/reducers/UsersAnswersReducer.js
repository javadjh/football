export const UsersAnswersReducer = (state={
    pageId:1,
    eachPerPage:12,
    total:0,
    usersAnswer:[]
},action)=>{
    switch (action.type){
        case "INIT_USERS_ANSWERS":
            return {...action.payload}
        default:
            return state
    }
}
