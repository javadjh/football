import React , {Fragment} from 'react'
import PagingComponent from "../utilityComponent/PagingComponent";

const AskTable = ({asks,handleDeleteUser,handelEditUser})=>{
    console.log(asks)
    return(
        <Fragment>
            <div className="table-responsive">
                <table dir={"ltr"} className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Answer count</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {asks.map((ask,index) =>(
                        <Fragment>
                            <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <a href="#" className="avatar rounded-circle mr-3">
                                            {(index+1)}
                                        </a>
                                        <div className="media-body">
                                            <span className="mb-0 text-sm">{ask.title}</span>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    {ask.answers.length}
                                </td>
                                <td>
                                    {ask.createDate}
                                </td>


                                <td className="text-right">
                                    <div className="dropdown">
                                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-right text-left dropdown-menu-arrow">
                                            <a style={{color:"royalblue"}} className="dropdown-item"  onClick={()=>{
                                                handelEditUser(ask)
                                            }}>Edit</a>

                                            <a style={{color:"red"}} onClick={()=>{
                                                handleDeleteUser(ask)
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

        </Fragment>
    )
}

export default AskTable
