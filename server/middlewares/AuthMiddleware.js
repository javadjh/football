const jwt = require('jsonwebtoken')

module.exports.admin = async (req,res,next)=>{
    const token = req.headers.token
    if(!token) res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})

    const isValid = jwt.verify(token,"sdc65s4dcSDCD$(3sd1c23s5c416s5c1s61c65c3scs3csc631s6cDCSDCS")

    req.user = jwt.decode(token,{complete:true}).payload
    console.log(req.user)
    if(req.user.role!=="admin")
        return res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    if(isValid){
        next()
    }else{
        res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    }
}

module.exports.user = async (req,res,next)=>{
    const token = req.headers.token
    if(!token) res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})

    const isValid = jwt.verify(token,"sdc65s4dcSDCD$(3sd1c23s5c416s5c1s61c65c3scs3csc631s6cDCSDCS")

    req.user = jwt.decode(token,{complete:true}).payload
    if(req.user.role!=="user")
        return res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    if(isValid){
        next()
    }else{
        res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    }
}

module.exports.justLogin = async (req,res,next)=>{
    const token = req.headers.token
    if(!token) res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})

    const isValid = jwt.verify(token,"sdc65s4dcSDCD$(3sd1c23s5c416s5c1s61c65c3scs3csc631s6cDCSDCS")

    req.user = jwt.decode(token,{complete:true}).payload
    if(isValid){
        next()
    }else{
        res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    }
}
