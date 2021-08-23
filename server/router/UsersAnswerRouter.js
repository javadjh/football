const express = require('express')
const {getUsersAnswerDate} = require("../handler/usersAnswer/query/UsersAnswerQuery");
const {getSingleUsersUsersAnswer} = require("../handler/usersAnswer/query/UsersUsersAnswerQuery");
const {canInsertUsersAnswer} = require("../handler/usersAnswer/query/UsersUsersAnswerQuery");
const {user} = require("../middlewares/AuthMiddleware");
const {getAllUsersUsersAnswer} = require("../handler/usersAnswer/query/UsersUsersAnswerQuery");
const {getSingleUsersAnswer} = require("../handler/usersAnswer/query/UsersAnswerQuery");
const {getUsersAnswer} = require("../handler/usersAnswer/query/UsersAnswerQuery");
const {admin} = require("../middlewares/AuthMiddleware");
const router = express.Router()

router.get('/usersanswers',[admin],getUsersAnswer)
router.get('/usersanswers/:id',[admin],getSingleUsersAnswer)
router.get('/usersanswer/table/:createDate',[admin],getUsersAnswerDate)
//user
router.get('/users/usersanswer',[user],getAllUsersUsersAnswer)
router.get('/users/usersanswer/:id',[user],getSingleUsersUsersAnswer)
router.get('/can/insert/users/answer',[user],canInsertUsersAnswer)

module.exports = router
