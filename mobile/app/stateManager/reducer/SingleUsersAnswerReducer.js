export const SingleUsersAnswerReducer = (state={
    _id:"",
    userId:"",
    createDate:"",
    answers:[],
},action)=>{
    switch (action.type){
        case "INIT_SINGLE_USERS_ANSWER":
            return {...action.payload}
        default:
            return state
    }
}
