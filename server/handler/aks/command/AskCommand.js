const AskModel = require("../../../model/AskModel");
const {updateAnswerValidator} = require("../../../validators/AskValidator");
const {insertAskValidator} = require("../../../validators/AskValidator");
const { isValidObjectId } = require('mongoose')
module.exports.insertAsk = async (req,res)=>{
    if(req.body.id){
        const {error} = updateAnswerValidator(req.body)
        if(error) return res.status(400).send({"error":error.message})
        let {answers,id,title} = req.body

        let updatedAsk = await AskModel.findOne({
            _id:id
        })
        updatedAsk.answers = answers
        updatedAsk.title = title
        updatedAsk = await updatedAsk.save()
        if(!updatedAsk) return res.status(400).send({"error":"خطا در ثبت سوال"})

        res.send(true)
    }else {
        const {error} = insertAskValidator(req.body)
        if (error) return res.status(400).send({"error": error.message})
        let {title, answers} = req.body

        let newAsk = new AskModel({
            title,
            answers
        })
        newAsk = await newAsk.save()
        if (!newAsk) return res.status(400).send({"error": "خطا در ثبت سوال"})

        res.send(true)
    }
}

module.exports.updateAnswer = async (req,res)=>{
    const {error} = updateAnswerValidator(req.body)
    if(error) return res.status(400).send({"error":error.message})
    let {answers,id} = req.body

    let updatedAsk = await AskModel.findOne({
        _id:id
    })
    updatedAsk.answers = answers
    updatedAsk = await updatedAsk.save()
    if(!updatedAsk) return res.status(400).send({"error":"خطا در ثبت سوال"})

    res.send(true)
}

module.exports.deleteAnswer = async (req,res)=>{
    if(!isValidObjectId(req.params.id)) return res.status(400).send({"error":"ای دی مشکل دارد"})

    let deletedAsk = await AskModel.findOneAndRemove({
        _id:req.params.id
    })
    if(!deletedAsk) return res.status(400).send({"error":"خطا در حذف سوالات"})

    res.send(true)
}
