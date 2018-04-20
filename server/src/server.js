// Dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookie_session = require('cookie-session')
const passport = require('passport')

// Config Imports
const config = require('./config')
const passport_service = require('./services/auth-services')
const app = express()

// Database set up
const mongoDB = `mongodb://${config.moongose.user}:${config.moongose.passwd}@ds251889.mlab.com:51889/sosnicaragua`
mongoose.connect(mongoDB)

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))

// App config setup
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
// ** App Sessions Config **
app.use(cookie_session({
  maxAge: 24 * 60 * 60 * 1000, // One day millisenconds.
  keys: [config.session.key]
}))
app.use(passport.initialize())
app.use(passport.session())

//Routes set up
const auth_routes = require('./routes/auth-routes')
const user_routes = require('./routes/user-routes')
app.use('/auth', auth_routes)
app.use('/user', user_routes)

app.use('/', (req, res, next) => {
  res.send('SOSNicaragua')
  console.log('Save Our Souls Nicaragua!')
})

// Running server
app.listen(process.env.PORT || config.port)
console.log(`Server listening on port: ${config.port}`)
