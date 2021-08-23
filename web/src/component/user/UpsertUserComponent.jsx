import React, {useEffect, useRef, useState} from 'react'
import validator from 'simple-react-validator'
import {useDispatch, useSelector} from "react-redux";
import {upsertUserAction} from "../../actions/UsersAction";
import {clearUserSingle, getUserSingleAction} from "../../actions/UserAction";

const UpsertUserComponent = ({history,match})=>{
    const userId = match.params.id
    const formValidator = useRef(new validator({
        messages:{
            required:"this is required",
            min:"this is so short",
            max:"this is so large",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const dispatch = useDispatch()
    const [title,setTitle] = useState("Insert player")
    const [userName,setUserName] = useState("")
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [password,setPassword] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [,setValidat] = useState(null)
    const user = useSelector(state => state.user)
    const handleAddUser = async ()=>{
        if(formValidator.current.allValid()) {
            let user = {}
            if (userId === undefined) {
                user = {
                    userName,
                    name,
                    lastName,
                    password,
                    phoneNumber
                }
            } else {
                user = {
                    id: userId,
                    userName,
                    name,
                    lastName,
                    phoneNumber
                }
            }
            await dispatch(upsertUserAction(user))
            history.goBack()
        } else{
            setValidat(1)
            formValidator.current.showMessages()
        }
    }
    useEffect(()=>{
        if(userId!==undefined){
            setTitle("Update player")
            getSingleUser()
        }
    },[])

    useEffect(()=>{
        if(userId!==undefined) {
            setUserName(user.userName)
            setName(user.name)
            setLastName(user.lastName)
            setPhoneNumber(user.phoneNumber)
        }
    },[user])


    const getSingleUser= async ()=>{
        await dispatch(clearUserSingle())
        await dispatch(getUserSingleAction(userId))

    }
    return(
        <div className="text-left mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center ml--10">
                        <div className="col-12 ">
                            <h3 className="mb-0">{title}</h3>
                        </div>

                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <h6 className="heading-small text-muted mb-4">User Info</h6>
                        <div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-username">Username</label>
                                        <input type="text" id="input-username"
                                               value={userName}
                                               dir={"ltr"}
                                               name={"userName"}
                                               onChange={(e) =>{
                                                   setUserName(e.target.value)
                                                   formValidator.current.showMessageFor("userName")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="Username"/>
                                    {formValidator.current.message("userName",userName,"required|min:3|max:50")}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-username">Phone number</label>
                                        <input type="text" id="input-username"
                                               value={phoneNumber}
                                               name={"phoneNumber"}
                                               dir={"ltr"}
                                               onChange={(e) =>{
                                                   if(!Number(e.target.value) && e.target.value!=="" && e.target.value!=="0")
                                                       return
                                                   setPhoneNumber(e.target.value)
                                                   formValidator.current.showMessageFor("phoneNumber")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="Phone number"/>
                                    {formValidator.current.message("phoneNumber",phoneNumber,"required|min:11|max:11")}
                                    </div>
                                </div>
                                {userId === undefined?(
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-phone">Password</label>
                                            <input type="password" id="input-phone"
                                                   name={"password"}
                                                   dir={"ltr"}
                                                   value={password}
                                                   onChange={(e)=>{
                                                       setPassword(e.target.value)
                                                       formValidator.current.showMessageFor("password")
                                                   }}
                                                   className="form-control form-control-alternative"
                                                   placeholder="Password"/>
                                        {formValidator.current.message("password",password,"min:2|max:40|required")}
                                        </div>
                                    </div>
                                ):(null)}

                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-first-name">Name</label>
                                        <input type="text" id="input-first-name"
                                               name={"name"}
                                               value={name}
                                               dir={"ltr"}
                                               onChange={(e)=>{
                                                   setName(e.target.value)
                                                   formValidator.current.showMessageFor("name")
                                               }}
                                               className="form-control form-control-alternative" placeholder="Name"/>
                                    {formValidator.current.message("name",name,"required|min:2|max:100")}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                                        <input type="text" id="input-last-name"
                                               value={lastName}
                                               name={"lastName"}
                                               dir={"ltr"}
                                               onChange={(e)=>{
                                                   setLastName(e.target.value)
                                                   formValidator.current.showMessageFor("lastName")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="Last name"/>
                                    {formValidator.current.message("lastName",lastName,"required|min:2|max:100")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">

                        <div className="col-2 text-left">
                            <a style={{color:"white"}} onClick={()=>{
                                handleAddUser()
                            }} className="btn btn-sm btn-primary p-3">{title}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpsertUserComponent
