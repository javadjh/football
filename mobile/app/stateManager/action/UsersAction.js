export const setTokenAction = (token)=>{
    return async (dispatch,state)=>{
        console.log(token)
        await dispatch({type:"INIT_TOKEN",payload:token})
    }
}
