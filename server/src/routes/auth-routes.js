// Dependencies
const passport =  require('passport')
const router = require('express').Router()
const auth_controller = require('../controllers/auth-controllers')

// Logout Route
router.get('/logout', auth_controller.logout)

// Login with Google Route
router.get('/google', auth_controller.authWithGoogle)

// Google Redirect Route
router.get('/google/redirect', passport.authenticate('google'), auth_controller.googleredirect)

module.exports = router
