const router = require('express').Router()

// require controllers here
const {getUsers, getUserById, createUser, updateUser, deleteUser, friend, unfriend} = require('../../controllers/userController')

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/users/:userid
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)

// /api/users/:userid/friends/:friendid

router.route('/:userid/friends/:friendid').post(friend).delete(unfriend)

module.exports = router