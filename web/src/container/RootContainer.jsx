import React from 'react'
import {Route, Switch,withRouter} from "react-router";

import {ToastContainer} from "react-toastify";
import RightMenu from "./RightMenu";
import AdminDashboardRoot from "../component/dashboard/AdminDashboardRoot";
import UsersRoot from "../component/user/UsersRoot";
import UpsertUserComponent from "../component/user/UpsertUserComponent";
import AskRoot from "../component/ask/AskRoot";
import UpsertAskComponent from "../component/ask/UpsertAskComponent";
import UsersAnswerRoot from "../component/usersAnswer/UsersAnswerRoot";
import ShowUsersAnswerComponent from "../component/usersAnswer/ShowUsersAnswerComponent";
import DateSortUsersAnswerRoot from "../component/DateSortUsersAnswer/DateSortUsersAnswerRoot";
import LoginComponent from "../component/login/LoginComponent";
import {LoadingBar} from "react-redux-loading-bar";
import SetIp from "../component/login/SetIp";

const RootComponent = ({history})=>{
    return(
        <div>

            <ToastContainer/>
            <Switch>
                <Route>
                    {history.location.pathname==="/login" || history.location.pathname==="/setip"?null:(
                        <RightMenu/>
                    )}
                    <div className="main-content">

                        <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8 text-left">
                            <div className="container-fluid" style={{marginTop:"60px"}}>
                                <Switch>
                                    <Route path={"/"} component={DateSortUsersAnswerRoot} exact/>
                                    <Route path={"/users"} component={UsersRoot} exact/>
                                    <Route path={"/upsert/user"} component={UpsertUserComponent} exact/>
                                    <Route path={"/upsert/user/:id"} component={UpsertUserComponent} exact/>
                                    <Route path={"/asks"} component={AskRoot} exact/>
                                    <Route path={"/upsert/ask"} component={UpsertAskComponent} exact/>
                                    <Route path={"/users/answer"} component={UsersAnswerRoot} exact/>
                                    <Route path={"/users/answer/:id"} component={ShowUsersAnswerComponent} exact/>
                                    <Route path={"/login"} component={LoginComponent} exact/>
                                    <Route path={"/setip"} component={SetIp} exact/>
                                </Switch>

                            </div>
                        </div>
                    </div>
                </Route>

            </Switch>
        </div>

    )
}
export default withRouter(RootComponent)
