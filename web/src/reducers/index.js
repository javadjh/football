import {combineReducers} from "redux";
import {UsersReducer} from "./UsersReducer";
import {UserReducer} from "./UserReducer";
import {AsksReducer} from "./AsksReducer";
import {AskReducer} from "./AskReducer";
import {UsersAnswersReducer} from "./UsersAnswersReducer";
import {UsersAnswerReducer} from "./UsersAnswerReducer";
import {DateUsersAnswerReducer} from "./DateUsersAnswerReducer";
import {loadingBarReducer} from "react-redux-loading-bar";

export const reduserCombined = combineReducers({
    users:UsersReducer,
    user:UserReducer,
    asks:AsksReducer,
    ask:AskReducer,
    usersAnswers:UsersAnswersReducer,
    usersAnswer:UsersAnswerReducer,
    dateUsersAnswer:DateUsersAnswerReducer,
    loadingBar:loadingBarReducer
})
