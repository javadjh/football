import React , { Fragment } from 'react'

const DateSortUsersAnswerAsksTable = ({asks})=>{
    return(
        <Fragment>
            <div className="table-responsive">
                <table dir={"ltr"} className="table align-items-center table-flush">
                    <thead className="thead-left">

                    </thead>
                    <tbody>
                    <Fragment>
                        {asks.map((u)=>(
                            <tr>
                                <th scope="col">{u.title}</th>
                                {u.answers.map((a)=>(
                                    <td style={{backgroundColor:`${a.color}`,textAlign:"center",color:"white"}}>
                                        <p style={{backgroundColor:"#303030",display:"inline",paddingRight:10,paddingLeft : 10, borderRadius:10,fontSize:13}}>{a.title}</p>
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
export default DateSortUsersAnswerAsksTable
