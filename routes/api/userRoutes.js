const router = require('express').Router()

// require controllers here
const {getUsers} = require('../../controllers/userController')

// /api/users

router.route('/').get(getUsers)

module.exports = router