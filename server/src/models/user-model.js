// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user_schema = new Schema({
  username: String,
  oAuthID: String,
  displayName: String,
  about: String,
})

const User = mongoose.model('user', user_schema)

module.exports = User
