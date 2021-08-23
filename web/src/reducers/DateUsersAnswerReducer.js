export const DateUsersAnswerReducer = (state={usersAnswers:[],asks:[]},action)=>{
    switch (action.type){
        case "INIT_DATE_USERS_ANSWER":
            return {...action.payload}
        default:
            return state
    }
}
