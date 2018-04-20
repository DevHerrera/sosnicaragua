// Dependencies
const express = require('express')

// Get User Information
exports.userInfo = (req, res) =>{
  res.send(`User Info: ${req.user}`)
}