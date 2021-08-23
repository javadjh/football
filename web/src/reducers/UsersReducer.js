export const UsersReducer = (state={
    pageId:1,
    eachPerPage:12,
    users:[]
},action)=>{
    switch (action.type){
        case "INIT_USERS":
            return {...action.payload}
        default:
            return state
    }
}
