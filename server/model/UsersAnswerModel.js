const mongoose = require("mongoose")
const {AnswerSchema} = require("./AskModel");
const UsersAnswersSchema = new mongoose.Schema({
    askTitle:{
        type:String,
        required:true
    },
    answerTitle:{
        type:String,
        required:true
    },
    askId:{
        type:mongoose.Types.ObjectId,
        required:true,
    },
    answer:{
        type:String,
        required:true
    },
    color:{
        type:String
    }
})
const UsersAnswerSchema = new mongoose.Schema({
    answers:{
        type:[UsersAnswersSchema],
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"user"
    },
    createDate:{
        type:Date,
        default:Date.now,
    }
})

const UsersAnswerModel = mongoose.model("usersAnswer",UsersAnswerSchema)
module.exports = UsersAnswerModel


