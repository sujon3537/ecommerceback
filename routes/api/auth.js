const express = require('express')
const _ = express.Router()

_.get('/registration', (req, res) => {
    console.log("this is registration")
})

module.exports = _