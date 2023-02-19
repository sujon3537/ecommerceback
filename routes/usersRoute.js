const express = require('express')
const _ = express.Router()

_.get('/', function(req, res){
    res.send("me router")
})

module.exports = _