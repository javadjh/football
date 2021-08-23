import React, {Fragment, useState} from 'react'
import {withRouter} from "react-router";

const SetIp = ({history})=>{
    const [ip,setIp] = useState("")
    const setIpHandle = async ()=>{
        localStorage.setItem("ip",ip)
        history.replace("/login")
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
                                                <input className="form-control" placeholder="آدرس سرور را وارد کنید" type="phoneNumber"
                                                       onChange={(e => setIp(e.target.value))}/>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary mt-4" onClick={()=>setIpHandle()}>ثبت آدرس</button>
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
export default withRouter(SetIp)
