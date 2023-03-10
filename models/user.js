const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: String,
        default: false
    },
    merchant: {
        type: Schema.Types.ObjectId,
        ref: "Merchant",
        default: null
    },
    googleId: {
        type: String
    },
    facebookId: {
        type: String
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        default: "member",
        enum: ["admin", "member", "merchant"]
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
})

module.exports = mongoose.model("User", userSchema)