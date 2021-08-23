const UsersAnswerModel = require("../../../model/UsersAnswerModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getAllUsersUsersAnswer = async (req,res)=>{

    let {pageId,eachPerPage} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)
    console.log(req.user.id)
    let usersAnswers = await UsersAnswerModel.find({
        userId:req.user.id
    }).skip((pageId-1)*eachPerPage).select("createDate").limit(eachPerPage).sort({createDate:-1}).lean()

    usersAnswers.map(u=>{
        u.createDate = convertToShamsi(u.createDate)
    })

    res.send({
        pageId,
        eachPerPage,
        usersAnswers
    })
}

module.exports.getSingleUsersUsersAnswer = async (req,res)=>{
    let usersAnswer = await UsersAnswerModel.findOne({
        _id:req.params.id,
        userId:req.user.id
    }).lean()

    usersAnswer.createDate= convertToShamsi(usersAnswer.createDate)

    res.send(usersAnswer)
}

module.exports.canInsertUsersAnswer = async (req,res)=>{
    res.send({
        canInsert:await canInsertLogic(req)
    })

}

const canInsertLogic = async (req)=>{
    let d = new Date();
    let canInsert = true

    let find = await UsersAnswerModel.findOne({
        userId:req.user.id,
    }).lean().select("createDate").sort({createDate:-1})
    if(!find){
        return canInsert

    }
    find.createDate = convertToShamsi(find.createDate)

    if(find.createDate===convertToShamsi(d)){
        canInsert = false
    }
    return canInsert
}

module.exports.canInsertLogic = canInsertLogic
