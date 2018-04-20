// Dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const config = require('./config')
const app = express()

// Database set up
const mongoDB = 'mongodb://sosnicuser:development@ds251889.mlab.com:51889/sosnicaragua'
mongoose.connect(mongoDB, {

})

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))

// App config setup
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

//Routes set up
app.use('/', (req, res, next) => {
  res.send('SOSNicaragua')
  console.log('Save Our Souls Nicaragua!')
})

// Running server
app.listen(process.env.PORT || config.port)
console.log(`Server listening on port: ${config.port}`)
