const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
module.exports.loginValidator = (data)=>{
    const validator = Joi.object({
        userName:Joi.string().min(2).max(40),
        password:Joi.string().required().min(3)
    })
    return validator.validate(data)
}
module.exports.insertUserValidator =  (data)=>{
    const validator = Joi.object({
        userName:Joi.string().required().min(2).max(40),
        name:Joi.string().required().min(2).max(30),
        lastName:Joi.string().required().min(2).max(30),
        password:Joi.string().required().min(3).max(32),
        phoneNumber:Joi.string()
    })
    return validator.validate(data)
}

module.exports.updateUserValidator =  (data)=>{
    const validator = Joi.object({
        id:Joi.objectId().required(),
        userName:Joi.string().required().min(2).max(40),
        name:Joi.string().required().min(2).max(30),
        lastName:Joi.string().required().min(2).max(30),
        phoneNumber:Joi.string()
    })
    return validator.validate(data)
}
