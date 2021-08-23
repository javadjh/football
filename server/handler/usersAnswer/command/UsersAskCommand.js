const UsersAnswerModel = require("../../../model/UsersAnswerModel");
const AskModel = require("../../../model/AskModel");
const {canInsertLogic} = require("../query/UsersUsersAnswerQuery");
module.exports.insertUsersAsk = async (req,res)=>{
    if(!await canInsertLogic(req)) return res.status(400).send({"error":"شما امروز ثبت کردید"})
    const {answers} = req.body
    const totalAsk = await AskModel.find().count().lean()
    console.log(totalAsk)
    console.log(answers.length)
    console.log("sdcsdcs")
    if(answers.length!==totalAsk) {
        console.log("لطفا همه پاسخ ها را ارسال نمایید")
        return res.status(400).send({"error":"لطفا همه پاسخ ها را ارسال نمایید"})
    }
    let newUsersAskAnswer = await new UsersAnswerModel({
        answers,
        userId:req.user.id
    })
    console.log("sdcsdcs9999999999999999")
    newUsersAskAnswer = await newUsersAskAnswer.save()
    if(!newUsersAskAnswer){

        console.log("خطا در ثبت رخ داده است")
        return res.status(400).send({"error":"خطا در ثبت رخ داده است"})
    }
    console.log(true)
    res.send(true)
}

