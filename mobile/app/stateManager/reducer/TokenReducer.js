export const TokenReducer = (state={token:""},action)=>{
    switch (action.type){
        case "INIT_TOKEN":
            return {...action.payload}
        default:
            return state
    }
}
