const mongoose = require("mongoose")

const registeredUsers = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
})

module.exports = mongoose.model("users", registeredUsers)