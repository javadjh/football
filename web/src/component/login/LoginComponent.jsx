import React, {Fragment, useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {withRouter} from "react-router";
import {loginService} from "../../APIConfig/userService";

const LoginComponent = ({history})=>{
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!localStorage.getItem("ip")){
            history.replace("/setip")
        }

    },[])
    const loginHandle = async ()=>{
        console.log("test")
        const user = {
            userName,
            password
        }
        const {data,status} = await loginService(user)
        if(status===200){
            await localStorage.setItem("token",data.token)
        }
        if(localStorage.getItem("token")){
            history.replace("/")
            window.location.reload(false);
        }
    }
    return(
        <Fragment>
            <div className="main-content bg-gradient-primary" style={{width:"100%",height:"65vh"}}>

                <div className="container pb-5" >
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary shadow border-0">
                                <div className="card-body px-lg-5 py-lg-5">
                                    <form role="form">
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-email-83"></i></span>
                                                </div>
                                                <input className="form-control" placeholder="نام کاربری" type="phoneNumber"
                                                    onChange={(event => setUserName(event.target.value))}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input className="form-control" placeholder="کلمه عبور" type="password"
                                                    onChange={event => setPassword(event.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary mt-4" onClick={()=>loginHandle()}>وارد شوید</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}
export default withRouter(LoginComponent)
