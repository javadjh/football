import React ,{Fragment} from 'react'
import {NavLink} from "react-router-dom";

const AdminLayout=()=>{
    return(
        <Fragment>

            <nav dir={"ltr"} style={{overflow:"hidden",paddingLeft:10}} className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand pt-0">
                        <img  src="./assets/img/brand/ibmalogo.jpg" className="navbar-brand-img img-fluid" width={130} alt="..."/>
                    </a>
                    <ul className="nav align-items-center d-md-none">

                    </ul>
                    <div className="collapse navbar-collapse text-leftt" id="sidenav-collapse-main">
                        <div className="navbar-collapse-header d-md-none">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="./index.html">
                                        {/*<img src="./assets/img/brand/blue.png"/>*/}

                                    </a>
                                </div>
                                <div className="col-6 collapse-close text-left">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link " exact  to={"/"} >
                                    <i className="ni ni-fat-delete text-primary"></i> Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/users"} exact>
                                    <i className="ni ni-fat-delete text-primary"></i> Players
                                </NavLink>
                                <NavLink className="nav-link" to={"/users/answer"} exact>
                                    <i className="ni ni-fat-delete text-primary"></i>Daily report
                                </NavLink>
                                <NavLink className="nav-link" to={"/asks"} exact>
                                    <i className="ni ni-fat-delete text-primary"></i>Question manager
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export default AdminLayout
