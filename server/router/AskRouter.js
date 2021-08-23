const express = require("express")
const {justLogin} = require("../middlewares/AuthMiddleware");
const {insertUsersAsk} = require("../handler/usersAnswer/command/UsersAskCommand");
const {deleteAnswer} = require("../handler/aks/command/AskCommand");
const {getAsks} = require("../handler/aks/query/AskQuery");
const {updateAnswer} = require("../handler/aks/command/AskCommand");
const {addAnswer} = require("../handler/aks/command/AskCommand");
const {insertAsk} = require("../handler/aks/command/AskCommand");
const {admin} = require("../middlewares/AuthMiddleware");
const router = express.Router()

router.post('/upsert/aks',[admin],insertAsk)
router.post('/update/answer',[admin],updateAnswer)
router.get('/asks',[justLogin],getAsks)
router.delete('/ask/:id',[admin],deleteAnswer)
router.post('/users/ask',[justLogin],insertUsersAsk)

module.exports = router
