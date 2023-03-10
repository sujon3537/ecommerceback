const express = require('express')
const _ = express.Router()
const User = require('../../models/user.js')

// registration
_.post("/registration", (req, res) => {
    let {email, phone, firstName, lastName, password} = req.body

    if(!email){
        return res.json({error: "You must enter an email address"})
    }
    if(!fullname){
        return res.json({error: "You must enter your full name"})
    }
    if(!password){
        return res.json({error: "You must enter a password"})
    }

    const user = new User({
        email,
        phone,
        firstName,
        lastName,
        password
    })
    res.json(user)
})

module.exports = _