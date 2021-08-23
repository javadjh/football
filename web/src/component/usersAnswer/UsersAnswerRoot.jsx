import React, {Fragment, useEffect, useState} from "react"
import SearchingComponent from "../utilityComponent/SearchingComponent";
import UsersTable from "./UsersAnswerTable";
import {useDispatch, useSelector} from "react-redux";
import {deletedUserAction, getUsersAction} from "../../actions/UsersAction";
import AskTable from "./UsersAnswerTable";
import {clearSingleAskAction, deleteAskAction, getAsksAction, setSingleAskAction} from "../../actions/AskAction";
import {getUsersAnswersAction} from "../../actions/UsersAnswersAction";
import UsersAnswerTable from "./UsersAnswerTable";

const UsersAnswerRoot = ({history})=>{
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [pageId,setPageId] = useState(1)
    const dispatch = useDispatch()
    const usersAnswers = useSelector(state => state.usersAnswers)
    useEffect(()=>{
        getUsers()
    },[pageId])

    const getUsers = async ()=>{
        setIsDataLoaded(false)
        await dispatch(getUsersAnswersAction({pageId,eachPerPage:12}))
        setIsDataLoaded(true)
    }


    const handelPaging = (pageId)=>{
        setPageId(pageId)
    }

    const handelEditUser = (usersAnswer)=>{
        console.log(usersAnswer)
        history.push(`/users/answer/${usersAnswer._id}`)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-Left">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">List of reviews</h3>
                            </div>
                            {isDataLoaded?(
                                <UsersAnswerTable history={history} usersAnswers={usersAnswers} handelPaging={handelPaging} handelEditUser={handelEditUser}  />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default UsersAnswerRoot
