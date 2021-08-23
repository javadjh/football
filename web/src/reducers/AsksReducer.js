export const AsksReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_ASKS":
            return [...action.payload]
        default:
            return state
    }
}
