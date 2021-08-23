const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        unique: true,
        required:true,
        minlength:2,
        maxlength:40,
    },
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    lastName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    password:{
        type:String,
        required:true,
    },
    createDate:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        enum : ['user','admin'],
        default:"user"
    },
    phoneNumber:{
        type:String,
    },
})

const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel
