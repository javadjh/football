const Joi = require('joi')
module.exports.insertAskValidator = (data)=>{
    const validator = Joi.object({
        title:Joi.string().required().min(5),
        answers:Joi.required()
    })
    return validator.validate(data)
}

module.exports.updateAnswerValidator = (data)=>{
    const validator = Joi.object({
        id:Joi.objectId().required(),
        answers:Joi.required(),
        title:Joi.string().required().min(5)
    })
    return validator.validate(data)
}
