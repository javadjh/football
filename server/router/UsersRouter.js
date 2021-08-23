const express = require('express')
const {updateUser} = require("../handler/user/command/UserCommand");
const {getSingleUser} = require("../handler/user/query/UserQuery");
const {deleteUser} = require("../handler/user/command/UserCommand");
const {login} = require("../handler/Login");
const {insertUser} = require("../handler/user/command/UserCommand");
const {getUsers} = require("../handler/user/query/UserQuery");
const {admin} = require("../middlewares/AuthMiddleware");
const router = express.Router()

router.get('/users',[admin],getUsers)
router.post('/upsert/user',[admin],insertUser)
router.delete('/user/:id',[admin],deleteUser)
router.get('/user/:id',[admin],getSingleUser)
router.post('/update/user',[admin],updateUser)
router.post('/login',login)

module.exports = router
