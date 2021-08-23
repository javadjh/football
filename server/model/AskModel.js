const mongoose = require('mongoose')
const AnswerSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:5,
    },
    color:{
        type:String,
        required:true,
        default:"#000000"
    }
})
const AskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:5
    },
    answers:{
        type:[AnswerSchema],
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now
    }
})

const AskModel = mongoose.model("aks",AskSchema)
module.exports = AskModel
module.exports.AnswerSchema = AnswerSchema
