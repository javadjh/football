const winston = require("winston");
module.exports = (error,req,res,next)=>{
    winston.error(error.message,error)
    console.log(error.message)
    console.log(error)
    res.status(400).send({"error":"خطای ناشناخته در سیستم رخ داده است"})
}
