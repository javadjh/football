import React , {Fragment} from 'react'
import PagingComponent from "../utilityComponent/PagingComponent";

const UsersAnswerTable = ({usersAnswers,handelEditUser,handelPaging})=>{
    console.log(usersAnswers)
    return(
        <Fragment>
            <div className="table-responsive">
                <table dir={"ltr"} className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Full name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Register Date</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {usersAnswers.usersAnswer.map((usersAnswers,index) =>(
                        <Fragment>
                            <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <a onClick={(event => {
                                            handelEditUser(usersAnswers)
                                        })} className="avatar rounded-circle mr-3">
                                            {(index+1)}
                                        </a>
                                        <div className="media-body">
                                            <span className="mb-0 text-sm">{usersAnswers.userId.name} {usersAnswers.userId.lastName}</span>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    {usersAnswers.userId.userName}
                                </td>
                                <td>
                                    {usersAnswers.createDate}
                                </td>



                            </tr>
                        </Fragment>
                    ))}

                    </tbody>
                </table>
            </div>
            <PagingComponent pageId={usersAnswers.pageId}
                             total={usersAnswers.total}
                             eachPerPage={usersAnswers.eachPerPage}
                             handelPaging={handelPaging}/>
        </Fragment>
    )
}

export default UsersAnswerTable
