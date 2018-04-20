// *** This file is oriented to the passport setup ***
// Dependencies
const passport = require('passport')
const google_strategy = require('passport-google-oauth20')
// Keys imports
const config = require('../config')

// Models imports
const User = require('../models/user-model')

// *** Setup ***

// Serializers

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((currentUser) => {
    done(null, currentUser)
  })
})

passport.use(
  new google_strategy({
    // Options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
  }, (accessToken, refreshToken, profile, done) => {
    // Check if user already exists
    User.findOne({ oAuthID: profile.id }).then((currentUser) => {
      // User already exists
      if(currentUser){
        // Serialize User
        done(null, currentUser)
      }
      // User does not exists, create one
      else{
        new User({
          username: profile.nickname,
          oAuthID: profile.id,
          displayName: profile.displayName,
          about: profile.tagline,
        }).save().then((newUser) => {
          // Serialize User
          done(null, newUser)
        })
      }
    })
  })
)