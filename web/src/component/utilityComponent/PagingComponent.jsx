import React from 'react'
import {range} from 'lodash'

const PagingComponent =({pageId,total,handelPaging,eachPerPage})=>{
    let pageList = []
    pageList = range(1,Math.ceil(total/eachPerPage)+1)
    console.log(pageList)
    return(
        <div className="card-footer py-4">
            <nav aria-label="..." dir={"ltr"}>
                <ul className="pagination justify-content-end mb-0">
                    {pageList.map(page=>(
                        <li className={page===pageId?("page-item active"):("page-item ")}>
                            <a className="page-link" onClick={()=>handelPaging(page)}>{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default PagingComponent
