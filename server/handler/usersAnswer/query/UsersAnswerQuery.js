const UsersAnswerModel = require("../../../model/UsersAnswerModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
const _ = require('lodash')
const AskModel = require("../../../model/AskModel");
module.exports.getUsersAnswer = async (req,res)=>{
    let {pageId,eachPerPage,createDate} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)
    let usersAnswer = await UsersAnswerModel.find({
        // createDate:new RegExp(createDate)
    }).skip((pageId-1)*eachPerPage).limit(eachPerPage).populate("userId","-password -createDate -role").select("-answers").lean()

    let total = await UsersAnswerModel.find({
        // createDate:new RegExp(createDate)
    }).count().lean()

    usersAnswer.map(u=>{
        u.createDate = convertToShamsi(u.createDate)
    })

    res.send({
        pageId,
        eachPerPage,
        total,
        usersAnswer
    })
}

module.exports.getSingleUsersAnswer = async (req,res)=>{
    let usersAnswer = await UsersAnswerModel.findOne({
        _id:req.params.id
    }).lean()

    usersAnswer.createDate = convertToShamsi(usersAnswer.createDate)


    res.send(usersAnswer)
}

module.exports.getUsersAnswerDate = async (req,res)=>{
    let date = req.params.createDate
    console.log(date)
    let usersAnswers = await UsersAnswerModel.find({
        '$where': `this.createDate.toJSON().slice(0, 10) == "${date}"`
    }).populate("userId","userName").lean()

    let asks = await AskModel.find().sort({title:-1}).lean()


    usersAnswers.map(u=>{
        u.createDate = convertToShamsi(u.createDate)
    })

    usersAnswers.map(u=>{
        u.answers = _.orderBy(u.answers, 'askTitle','desc');
    })

    res.send({
        usersAnswers,
        asks
    })
}


