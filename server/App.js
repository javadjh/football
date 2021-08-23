//external require
const UsersAnswerModel = require("./model/UsersAnswerModel");
const UserModel = require("./model/UserModel");
let cron = require('node-cron');
const Kavenegar = require('kavenegar');
const express = require("express")
const winston = require('winston')
const process = require('process')
const cors = require('cors')
require("express-async-errors")
require('winston-mongodb');
//internal require
require('./databaseConfig/mongoDBConfig')
const log = require("./middlewares/log");
//express init and config
const app = express()
app.use(express.json())
// app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, x-auth-token, Content-Type, Accept'
    )
    res.header('token', ' 3.2.1')
    next()
})
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//routes
app.use(log)
app.use("/api/v1",require('./router/UsersRouter'))
app.use("/api/v1",require('./router/AskRouter'))
app.use("/api/v1",require('./router/UsersAnswerRouter'))



app.get('/', (req, res) => {
    res.send("hello world")
});

//config other library
winston.add(new winston.transports.File({filename:"log.log"}))
winston.add(
    new winston.transports.MongoDB({
        db: 'mongodb://root:oLT18PiqZZOq802TPmTX4SVD@footballdb:27017/football',
        level: 'error',
    }),
);

//set other middleware
app.use(require('./middlewares/ErrorMiddleware'))
process.on("uncaughtException",(uncaughtExceptionError)=>{
    winston.error(uncaughtExceptionError)
})
process.on("unhandledRejection",(unhandledRejectionError)=>{
    winston.error(unhandledRejectionError)
})




const api = Kavenegar.KavenegarApi({
    apikey: '58494D4337476F7534667431315A72364E34624A4457517A7034304C51496C4639574968677158736371553D'
});
cron.schedule('* * * * *', () => {
    let time  = (new Date()).getHours() + ":" + (new Date()).getMinutes()
    if(time==="14:47"){
        sendSms()
    }
    console.log('running a task every minute');
});

const sendSms = async ()=>{
    let date = new Date()
    date.setDate(date.getDate())
    let usersSent = await UsersAnswerModel.find({
        '$where': `this.createDate.toJSON().slice(0, 10) == "${date.toJSON().slice(0,10)}"`
    }).select("-_id userId").lean()
    let userSentList = []
    usersSent.map(u=>{
        userSentList.push({_id:u.userId})
    })

    let allUsers = await UserModel.find().select("_id").lean()

    let needSms = allUsers.filter(elm => !userSentList.map(elm => JSON.stringify(elm)).includes(JSON.stringify(elm)));

    let users = await UserModel.find({
        _id:needSms
    }).select("phoneNumber").lean()

    let phoneNumbers = ""
    for (let i = 0 ; i<users.length ; i++){
        phoneNumbers = phoneNumbers + users[i].phoneNumber + ","
    }
    console.log(phoneNumbers)

    api.Send({
            message: "تست نهایی",
            sender: "10004346",
            receptor: phoneNumbers
        },
        function(response, status) {
            console.log(response);
            console.log(status);
        });

}







//express Listener
app.listen(1000,()=>{
    console.log("http://localhost:1000")
})
