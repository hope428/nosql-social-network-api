const router = require('express').Router()

// require controllers here
const {getUsers, getUserById, createUser} = require('../../controllers/userController')

// /api/users

router.route('/').get(getUsers).post(createUser)

// /api/users/:userid

router.route('/:id').get(getUserById)

module.exports = router