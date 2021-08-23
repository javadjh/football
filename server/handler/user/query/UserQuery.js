const UserModel = require("../../../model/UserModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
const {isValidObjectId} = require('mongoose')
module.exports.getUsers = async (req,res)=>{
    let {pageId,eachPerPage,userName,lastName} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)

    let users = await UserModel.find({
        userName:new RegExp(userName),
        lastName:new RegExp(lastName),
        role:"user"
    }).skip((pageId-1)*eachPerPage).select("-password").sort({createDate:-1}).limit(eachPerPage).lean()

    let total = await UserModel.find({
        userName:new RegExp(userName),
        role:"user"
    }).select("-password").count().lean()

    users.map(u=>{u.createDate = convertToShamsi(u.createDate)})

    res.send({
        total,
        pageId,
        eachPerPage,
        users
    })
}

module.exports.getSingleUser = async (req,res)=>{
    if(!isValidObjectId(req.params.id) || req.params.id==="") return res.status(400).send({"error":"ای دی مشکل دارد"})

    let user = await UserModel.findOne({_id:req.params.id}).select("-password").lean()
    if(!user) return res.status(400).send({"error":"کاربر یافت نشد"})

    user.createDate = convertToShamsi(user.createDate)

    res.send(user)
}
