let express = require('express')
let router = express.Router()
let user = require('../controllers/user')

router.post('/daftar',user.addUser)
router.post('/login',user.loginUser)
router.get('/',user.getUser)

module.exports = router
