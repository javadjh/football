import React, {Fragment, useEffect, useState} from 'react'
import SearchingComponent from "../utilityComponent/SearchingComponent";
import UsersTable from "../user/UsersTable";
import DateSortUsersAnswerTable from "./DateSortUsersAnswerTable";
import {useDispatch, useSelector} from "react-redux";
import {getDateUsersAnswerAction} from "../../actions/UsersAnswersAction";
import DateSortUsersAnswerAsksTable from "./DateSortUsersAnswerAsksTable";

import { Calendar, DatePicker } from "react-persian-datepicker";
import moment from "moment-jalaali";
let styles = {
    calendarContainer: "calendarContainer",
    dayPickerContainer: "dayPickerContainer",
    monthsList: "monthsList",
    daysOfWeek: "daysOfWeek",
    dayWrapper: "dayWrapper",
    selected: "selected",
    heading: "heading",
    next: "next",
    prev: "prev",
    title: "title",
    currentMonth: "currentMonth",
};

const DateSortUsersAnswerRoot = ({history})=>{
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [valueDate,setValueDate] = useState('')
    const [date,setDate] = useState(null)
    const dateUsersAnswer = useSelector(state => state.dateUsersAnswer)
    const dispatch = useDispatch()

    const getData = async ()=>{

        setIsDataLoaded(false)
        await dispatch(getDateUsersAnswerAction(date))
        setIsDataLoaded(true)
    }
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            return history.push("/login")
        }else {
            getData()
        }
    },[])
    useEffect(()=>{
        const finalDate = moment(valueDate._d).locale('fa').format('YYYY/MM/DD')
        const forSendDate= finalDate.replaceAll("/","-")
        console.log(date)
        setDate(forSendDate)
        if(!localStorage.getItem("token")){
            return history.push("/login")
        }else {
            getData()
        }
    },[valueDate])
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-left">
                <div className="row">
                    <div className="col">
                        <div className="card shadow"
                             dir={"ltr"}
                             style={{alignSelf:"left",justifyContent:"left",alignItems:"left",marginBottom:10,padding:10,
                                 flexDirection:"row",alignContent:"flex-start",justifyItems:"left",justifySelf:"left",textAlign:"left",}}>
                            <DatePicker
                                className={"form-control"}
                                calendarStyles={styles}
                                value={valueDate}
                                onChange={(e) => {
                                    setValueDate(e)
                                    console.log(valueDate)
                                }}
                            />
                            <p style={{marginTop:12,marginLeft:10,marginRight:10}}>Set Date</p>
                        </div>
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">List of ratings</h3>
                            </div>
                            {isDataLoaded?(
                                <div>
                                    <DateSortUsersAnswerAsksTable   asks={dateUsersAnswer.asks} />
                                    <br />
                                    <br />
                                    <br     />
                                    <DateSortUsersAnswerTable usersAnswer={dateUsersAnswer.usersAnswers} asks={dateUsersAnswer.asks} />
                                </div>
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default DateSortUsersAnswerRoot
