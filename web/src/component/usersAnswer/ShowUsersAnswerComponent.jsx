import React, {Fragment, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getSingleUsersAnswerAction} from "../../actions/UsersAnswersAction";

const ShowUsersAnswerComponent = ({match})=>{
    const dispatch = useDispatch()
    const usersAnswer = useSelector(state => state.usersAnswer)
    const [isLoaded,setIsLoaded] = useState(false)
    useEffect(()=>{
        getSingleUersAnswer()
    },[])
    const getSingleUersAnswer = async () =>{
        await dispatch(getSingleUsersAnswerAction(match.params.id))
        setIsLoaded(true)
    }
    return(
        <Fragment>
            <div className="text-left mt--8">
                <div className="card bg-secondary shadow">
                    <div className="card-header bg-white border-0">
                        <div className="row align-items-center">
                            <div className="col-8">
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3" >
                            <div className="col">
                                <div className="card shadow">
                                    <div dir={"ltr"} className="card-header border-0">
                                        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                                            {isLoaded?(
                                                <Fragment>
                                                    {usersAnswer.answers.map(a=>(
                                                        <div style={{display:"flex",flexDirection:"row", marginLeft:20}}>
                                                            <p className="btn btn-sm p-3 mr--2" style={{
                                                                backgroundColor:`#000000`,
                                                                color:"white"
                                                            }}>{a.askTitle}</p>
                                                            <p className="btn btn-sm btn-danger p-3">{a.answerTitle}</p>
                                                        </div>
                                                    ))}
                                                </Fragment>
                                            ):(null)}


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </Fragment>
    )
}

export default ShowUsersAnswerComponent
