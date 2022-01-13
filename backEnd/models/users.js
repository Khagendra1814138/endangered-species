const mongoose = require("mongoose")

const registeredUsers = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
})

module.exports = mongoose.model("users", registeredUsers)