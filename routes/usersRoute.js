const express = require('express')
const _ = express.Router()

_.get('/', function(req, res){
    console.log("me router")
})

module.exports = _