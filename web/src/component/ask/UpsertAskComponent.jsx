import React, {Fragment, useEffect, useState} from 'react'
import AskTable from "./AskTable";
import {useDispatch, useSelector} from "react-redux";
import {upsertAskAction} from "../../actions/AskAction";

const UpsertAskComponent = ({history})=>{
    const singleAsk = useSelector(state => state.ask)
    const [answers,setAnswers] = useState([])
    const [title,setTitle] = useState('')
    const [mainTitle,setMainTitle] = useState('')
    const [color,setColor] = useState('#000000')
    const [id,setId] = useState(null)
    const dispatch = useDispatch()
    const addAnswer = ()=>{
        let answersList = [...answers]
        let isRepeated = answersList.filter(a=>a.title===title)
        if(isRepeated.length>0){
            return
        }
        answersList.push({title,color})
        setAnswers(answersList)
        setTitle("")
    }
    const onRemoveAnswer = (titleRemove)=>{
        let answersList = [...answers]
        answersList = answersList.filter(a=>a.title!==titleRemove)
        setAnswers(answersList)
        setTitle("")
    }
    const handleAddAsk= async ()=>{
        let data = {}
        if(singleAsk.title!==undefined){
            data = {
                id,
                answers,
                title:mainTitle
            }
        }else{
            data = {
                answers,
                title:mainTitle
            }
        }
        await dispatch(upsertAskAction(data))
        history.goBack()
    }
    useEffect(()=>{
        if(singleAsk.title!==undefined){
            setAnswers(singleAsk.answers)
            setMainTitle(singleAsk.title)
            setId(singleAsk._id)
        }
    },[])
    return(
        <Fragment>
            <div dir={"ltr"} className="text-right mt--8">
                <div className="card bg-secondary shadow">
                    <div className="card-header bg-white border-0">
                        <div className="row align-items-center">
                            <div className="ml-3">
                                <h3 className="mb-0">Add new question</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3" >
                            <div className="col">
                                <div className="card shadow">
                                    <div className="card-header border-0">

                                        <form>
                                            <div className="pl-lg-4">
                                                <div className="row">
                                                    <div className="col-lg-5">
                                                        <div className="form-group">
                                                            <label  className="form-control-label d-flex align-item-start" htmlFor="input-username">Question title</label>
                                                            <input type="text" id="input-username"
                                                                   onChange={(e)=>{
                                                                       setMainTitle(e.target.value)
                                                                   }}
                                                                   dir={"ltr"}
                                                                   value={mainTitle}
                                                                   className="form-control form-control-alternative"
                                                                   placeholder="Question title"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group" >
                                                            <label className="form-control-label d-flex align-item-start" htmlFor="title">Answer title</ label>
                                                            <div style={{display:"flex",flexDirection:"row"}}>
                                                                <input type="text" id="title"
                                                                       dir={"ltr"}
                                                                       value={title}
                                                                       onChange={(e)=>{
                                                                           setTitle(e.target.value)
                                                                       }}
                                                                       className="form-control form-control-alternative"
                                                                       placeholder="Answer title"/>
                                                                <input className="form-control form-control-alternative" type="color" id="favcolor" name="favcolor" style={{
                                                                    border:"none",
                                                                    borderRadius:10,
                                                                    width:50
                                                                }} value={color} dir={"ltr"} onChange={(event => {
                                                                    setColor(event.target.value)
                                                                })}/>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="card-header bg-white border-0 mt-2 col-lg-3">
                                                        <div className="row align-items-center">

                                                            <div className="col-12  text-right">
                                                                <a onClick={addAnswer} style={{color:"white"}} className="btn btn-sm btn-dark p-3">Add answer</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                                            {answers.map(answer =>(
                                                <div style={{display:"flex",flexDirection:"row", marginLeft:20}}>
                                                    {console.log(answer)}
                                                    <p className="btn btn-sm btn-danger p-3 mr--2" onClick={(e)=>onRemoveAnswer(answer.title)}>remove</p>
                                                    <p className="btn btn-sm p-3 " style={{
                                                        backgroundColor:`${answer.color}`,
                                                        color:"white"
                                                    }}>{answer.title}</p>
                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-header bg-white border-0" dir={"rtl"} >
                        <div className="row align-items-center">
                            <div className="mr-2 text-left">
                                <a style={{color:"white"}} onClick={()=>{
                                    handleAddAsk()
                                }} className="btn btn-sm btn-primary p-3">Insert Question</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default UpsertAskComponent
