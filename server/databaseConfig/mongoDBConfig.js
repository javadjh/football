const mongoose = require('mongoose')

const connection = async ()=>{
    const connect = await mongoose.connect("mongodb://root:oLT18PiqZZOq802TPmTX4SVD@db:27017/football",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        authSource:'admin'
    })
    if(connect){
        console.log("connection database has running")
    }else{
        console.log("connection database has fail")
    }
}
//mongodb://localhost:27017/football
module.exports = connection()
