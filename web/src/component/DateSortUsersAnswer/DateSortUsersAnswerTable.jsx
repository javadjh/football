import React , { Fragment } from 'react'

const DateSortUsersAnswerTable = ({usersAnswer,asks})=>{
    console.log(usersAnswer)
    console.log(asks)

    return(
        <Fragment>
            <div className="table-responsive">
                <table dir={"ltr"} className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th style={{textAlign:"center"}} scope="col">player</th>
                        {asks.map((u)=>(
                            <th style={{textAlign:"center"}} scope="col">{u.title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <Fragment>
                        {usersAnswer.map((u)=>(
                            <tr>
                                <td style={{textAlign:"center"}}>{u.userId.userName}</td>
                                {u.answers.map((a)=>(
                                    <td style={{backgroundColor:`${a.color}`,textAlign:"center",color:"white"}}>
                                        <p style={{backgroundColor:"#303030",display:"inline",paddingRight:10,paddingLeft : 10, borderRadius:10,fontSize:13}}>{a.answer}</p>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </Fragment>

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default DateSortUsersAnswerTable
