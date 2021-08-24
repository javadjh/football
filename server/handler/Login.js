const UserModel = require("../model/UserModel");
/*
const bcrypt = require('bcrypt')
*/
const argon2 = require('argon2');
const {genToken} = require("../utility/jwtUtility");
const {loginValidator} = require("../validators/UsersValidator");
module.exports.login = async (req,res)=>{
    const {error} = loginValidator(req.body)
    if(error) res.status(400).send({"error":error.message})
    const user = await UserModel.findOne({
        userName:req.body.userName,
    })
    console.log(user)
    if(!user) return res.status(400).send({"error":"پیدا نشد"})
    // const isPasswordMatch = await bcrypt.compare(req.body.password,user.password)
    const isPasswordMatch = await argon2.verify(user.password, req.body.password)
    if(!isPasswordMatch) return res.status(400).send({"error":"نام کاربری یا رمز عبور اشتباه میباشد"})
    res.send(genToken({
        id:user._id,
        userName:user.userName,
        lastName:user.lastName,
        name:user.name,
        createDate:user.createDate,
        role:user.role
    }))
}
