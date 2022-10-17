const express = require('express')
const router = express.Router()
const user = require('./userRouter')
const room = require('./room')
router.use('/user', user)
router.use('/room', room)

module.exports = router