// Dependencies
const router = require('express').Router()

// Middlewares
const auth_middleware = require('../middlewares/auth-middlewares')

// Controllers
const user_controllers = require('../controllers/user-controllers')

// Profile Route
router.get('/', auth_middleware.auth_check, user_controllers.userInfo)

module.exports = router