const express = require('express')
const _ = express.Router()

// registration
_.post("/registration", (req, res) => {
    let {email, fullname, password, isSubscribed} = req.body

    if(!email){
        return res.json({error: "You must enter an email address"})
    }
    if(!fullname){
        return res.json({error: "You must enter your full name"})
    }
    if(!password){
        return res.json({error: "You must enter a password"})
    }

    res.json({email, fullname, password, isSubscribed})
})

module.exports = _