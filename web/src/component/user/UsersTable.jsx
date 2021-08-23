import React , {Fragment} from 'react'
import PagingComponent from "../utilityComponent/PagingComponent";

const UsersTable = ({users,handelPaging,handleDeleteUser,handelEditUser,history})=>{
    console.log(users)
    return(
        <Fragment>
            <div className="table-responsive">
                <table dir={"ltr"} className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Full name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Register date</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.users.map((user,index) =>(
                        <Fragment>
                            <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <a href="#" className="avatar rounded-circle mr-3">
                                            {(index+users.pageId*users.eachPerPage-users.eachPerPage+1)}
                                        </a>
                                        <div className="media-body">
                                            <span className="mb-0 text-sm">{`${user.name} ${user.lastName}`}</span>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    {user.userName}
                                </td>
                                <td>
                                    {user.createDate}
                                </td>


                                <td className="text-left">
                                    <div className="dropdown">
                                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-left text-left dropdown-menu-arrow">
                                            <a style={{color:"royalblue"}} className="dropdown-item"  onClick={()=>{
                                                handelEditUser(user)
                                            }}>Edit</a>

                                            <a style={{color:"red"}} onClick={()=>{
                                                handleDeleteUser(user)
                                            }} className="dropdown-item"  >Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </Fragment>
                    ))}

                    </tbody>
                </table>
            </div>
            <PagingComponent pageId={users.pageId}
                             total={users.total}
                             eachPerPage={users.eachPerPage}
                             handelPaging={handelPaging}/>
        </Fragment>
    )
}

export default UsersTable
