const AskModel = require("../../../model/AskModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getAsks = async (req,res)=>{
    let asks = await AskModel.find().lean()
    asks.map(a=>{
        a.createDate = convertToShamsi(a.createDate)
    })
    res.send(asks)
}
