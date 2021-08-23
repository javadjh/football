import React, {Fragment, useEffect, useState} from "react"
import SearchingComponent from "../utilityComponent/SearchingComponent";
import UsersTable from "./AskTable";
import {useDispatch, useSelector} from "react-redux";
import {deletedUserAction} from "../../actions/UsersAction";
import AskTable from "./AskTable";
import {clearSingleAskAction, deleteAskAction, getAsksAction, setSingleAskAction} from "../../actions/AskAction";

const AskRoot = ({history})=>{
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const dispatch = useDispatch()
    const asks = useSelector(state => state.asks)
    useEffect(()=>{
        getAsks()
    },[])

    const getAsks = async ()=>{
        setIsDataLoaded(false)
        await dispatch(getAsksAction())
        setIsDataLoaded(true)

    }

    const handleDeleteUser = async (ask)=>{
        await dispatch(deleteAskAction(ask._id))
    }
    const handelEditUser = async (ask)=>{
        await dispatch(setSingleAskAction(ask))
        history.push(`/upsert/ask`)
    }
    const goUpsertPage = async ()=>{
        await dispatch(clearSingleAskAction())
        history.push("/upsert/ask")
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-left">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <button onClick={goUpsertPage} type="button" className="btn btn-primary my-4 mx-3">Add new Question</button>
                                <h3 style={{display:"inline"}} className="mb-0">Questions list</h3>
                            </div>
                            {isDataLoaded?(
                                <AskTable asks={asks} handleDeleteUser={handleDeleteUser} handelEditUser={handelEditUser} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AskRoot
