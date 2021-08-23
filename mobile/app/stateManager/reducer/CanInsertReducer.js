export const CanInsertReducer = (state= {},action)=>{
    switch (action.type){
        case "INIT_CAN_INSERT":
            return {...action.payload}
        default:
            return state
    }
}
