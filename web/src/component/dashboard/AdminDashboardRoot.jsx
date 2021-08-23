import React, {Fragment} from 'react'

const AdminDashboardRoot = ()=>{
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">

                <div className="row mb-4">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">تنظیمات بر اساس</h3>
                            </div>
                            <div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">کاربران این ساختمان</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AdminDashboardRoot
