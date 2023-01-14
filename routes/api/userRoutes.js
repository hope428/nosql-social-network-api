const router = require('express').Router()

// require controllers here
const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('../../controllers/userController')

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/users/:userid
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)

module.exports = router