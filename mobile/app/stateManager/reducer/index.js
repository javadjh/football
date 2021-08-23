import {combineReducers} from "redux";
import {UsersAnswerReducer} from "./UsersAnswersReducer";
import {AsksReducer} from "./AsksReducer";
import {CanInsertReducer} from "./CanInsertReducer";
import {SingleUsersAnswerReducer} from "./SingleUsersAnswerReducer";
import {TokenReducer} from "./TokenReducer";

export const reducerCombine = combineReducers({
    usersAnswers:UsersAnswerReducer,
    asks:AsksReducer,
    canInsert:CanInsertReducer,
    singleUsersAnswer:SingleUsersAnswerReducer,
    token:TokenReducer,
})
