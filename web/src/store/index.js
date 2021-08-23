import {applyMiddleware, compose, createStore} from "redux";
import {reduserCombined} from "../reducers";
import thunk from "redux-thunk";
import {loadingBarMiddleware} from "react-redux-loading-bar";

export const store = createStore(reduserCombined,compose(
    applyMiddleware(thunk,loadingBarMiddleware()),
))


store.subscribe(()=>console.log(store.getState()))
