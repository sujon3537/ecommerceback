const express = require('express')
const _ = express.Router()
const User = require('../../models/user.js')
var jwt = require('jsonwebtoken')
const { sendVerificationEmail } = require('../../utils/emailSender.js')

// registration
_.post("/registration", (req, res) => {
    let {email, phone, firstName, lastName, password} = req.body

    if(!email){
        return res.json({error: "You must enter an email address"})
    }
    if(!firstName){
        return res.json({error: "You must enter your first name"})
    }
    if(!lastName){
        return res.json({error: "You must enter your last name"})
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

    user.save()

    let username = user.firstName+user.lastName
    let token = jwt.sign({email: user.email}, "kL`5(Gf[NE'=yz@", { expiresIn: "1h" })
    sendVerificationEmail(user.email, username, token)
    res.json(token)
})

module.exports = _