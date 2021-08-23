import React, {useState} from "react";
const SearchingComponent = ({onSearching ,firstHint , secondHint ,secondInputType ,btnTitle="search"})=>{
    const [userNameSearch,setUserNameSearch] = useState("")
    const [homeNumberSearch,setHomeNumberSearch] = useState("")
    return(
        <div className="row mb-3" >
            <div className="col">
                <div className="card shadow">
                    <div className="card-header border-0">
                        <form>
                            <div>
                                <div className="row">
                                    <div className="card-header bg-white border-0 col-lg-2">
                                        <div className="row align-items-center">
                                            <div className="col-5 text-left">
                                                <a onClick={()=>{
                                                    onSearching(userNameSearch,homeNumberSearch)
                                                }} style={{color:"white"}} className="btn btn-sm btn-dark p-3">{btnTitle}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-username">{firstHint}</label>
                                            <input type="text" id="input-username"
                                                   onChange={(e)=>{
                                                       setUserNameSearch(e.target.value)
                                                   }}
                                                   dir={"ltr"}
                                                   className="form-control form-control-alternative"
                                                   placeholder={firstHint}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="">{secondHint}</label>
                                            <input type={secondInputType} id="input-number"
                                                   onChange={(e)=>{
                                                       setHomeNumberSearch(e.target.value)
                                                   }}
                                                   dir={"ltr"}
                                                   className="form-control form-control-alternative"
                                                   placeholder={secondHint}/>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SearchingComponent
