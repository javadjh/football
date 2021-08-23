const UserModel = require("../../../model/UserModel");
const {insertUserValidator} = require("../../../validators/UsersValidator");
const bcrypt = require('bcrypt')
const {updateUserValidator} = require("../../../validators/UsersValidator");
const { isValidObjectId } = require("mongoose")
module.exports.insertUser = async (req,res)=>{
    if(req.body.id){
        const {id,userName,name,lastName,phoneNumber} = req.body
        const {error} = updateUserValidator({id,userName,name,lastName,phoneNumber})
        if(error) return res.status(400).send({"error":error.message})

        const updatedUser = await UserModel.findOneAndUpdate({_id:id},{
            $set:{
                userName,
                name,
                lastName,
                phoneNumber
            }
        })
        if(!updatedUser) return res.status(400).send({"error":"خطا در ویرایش رخ داد"})

        res.send(true)
    }else {
        const {error} = insertUserValidator(req.body)
        if (error) res.status(400).send({"error": error.message})
        let {userName, name, lastName, password,phoneNumber} = req.body

        let duUser = await UserModel.findOne({userName})
        if (duUser) return res.status(400).send({"error": "کاربر تکراری میباشد"})

        const salt = await bcrypt.genSalt(10)
        let passwordHashed = await bcrypt.hash(password, salt)

        let newUser = await new UserModel({
            userName,
            name,
            lastName,
            password: passwordHashed,
            phoneNumber,
        })

        newUser = await newUser.save()
        if (!newUser) return res.status(400).send({"error": "خطا در ثبت کاربر رخ داده است"})

        res.send(true)
    }

}

module.exports.deleteUser = async (req,res)=>{
    if(!isValidObjectId(req.params.id) || req.params.id==="") return res.status(400).send({"error":"ای دی مشکل دارد"})

    let userDeleted = await UserModel.findOneAndDelete({_id:req.params.id})
    if(!userDeleted) return res.status(400).send({"error":"خطا در حذف کاربر"})

    res.send(true)
}

module.exports.updateUser = async (req,res)=>{
    const {error} = updateUserValidator(req.body)
    if(error) return res.status(400).send({"error":error.message})
    const {id,userName,name,lastName} = req.body

    const updatedUser = await UserModel.findOneAndUpdate({_id:id},{
        $set:{
            userName,
            name,
            lastName
        }
    })

    res.send(true)
}
