// Dependencies
const express = require('express')
const passport = require('passport')


exports.googleredirect = (req, res) => {
  res.redirect('/user')
}

// Auth logout
exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}


// Auth with google, handle with Passport
exports.authWithGoogle = passport.authenticate('google', {
  scope: ['profile']
})

// Auth with twitter
exports.authWithTwitter = (req, res) => {
  // Handle with Passport
}

// Auth with facebook
exports.authWithFacebook = (req, res) => {
  // Handle with Passport
}