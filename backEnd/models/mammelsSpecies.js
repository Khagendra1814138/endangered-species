const mongoose = require("mongoose")

const mammelsSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("mammels", mammelsSchema)