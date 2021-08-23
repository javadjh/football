export const AskReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_SET_ASK_SINGLE":
            return {...action.payload}
        default:
            return state
    }
}
