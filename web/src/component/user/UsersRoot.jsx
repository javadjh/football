import React, {Fragment, useEffect, useState} from "react"
import SearchingComponent from "../utilityComponent/SearchingComponent";
import UsersTable from "./UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {deletedUserAction, getUsersAction} from "../../actions/UsersAction";

const UsersRoot = ({history})=>{
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [pageId,setPageId] = useState(1)
    const [userName,setUserName] = useState('')
    const [lastName,setLastName] = useState('')
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    useEffect(()=>{
        getUsers()
    },[pageId,userName,lastName])

    const getUsers = async ()=>{
        setIsDataLoaded(false)
        await dispatch(getUsersAction({pageId,eachPerPage:12,userName,lastName}))
        setIsDataLoaded(true)
    }

    const onSearching = async (s1,s2)=>{
        await setUserName(s1)
        await setLastName(s2)
    }

    const handelPaging = (pageId)=>{
        setPageId(pageId)
    }
    const handleDeleteUser = async (user)=>{
        await dispatch(deletedUserAction({pageId,eachPerPage:12,userName,lastName},user._id))
        // getUsers()
    }
    const handelEditUser = (user)=>{
        history.push(`/upsert/user/${user._id}`)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-left">
                <SearchingComponent onSearching={onSearching} firstHint={"username"} secondHint={"last name"} secondInputType={"text"}/>
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <button onClick={(e)=>history.push("/upsert/user")} type="button" className="btn btn-primary my-4 ml-4">Add new Player</button>
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">List of ratings
                                </h3>
                            </div>
                            {isDataLoaded?(
                                <UsersTable history={history} users={users} handelPaging={handelPaging} handleDeleteUser={handleDeleteUser} handelEditUser={handelEditUser} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default UsersRoot
