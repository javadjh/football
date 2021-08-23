import {applyMiddleware, compose, createStore} from "redux";
import {reducerCombine} from "../reducer";
import thunk from "redux-thunk";

export const store = createStore(reducerCombine,compose(
    applyMiddleware(thunk)
))


store.subscribe(()=>console.log(store.getState()))

