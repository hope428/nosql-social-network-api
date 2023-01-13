const router = require('express').Router()

// require controllers here
const {getUsers, getUserById} = require('../../controllers/userController')

// /api/users

router.route('/').get(getUsers)

// /api/users/:userid

router.route('/:id').get(getUserById)

module.exports = router