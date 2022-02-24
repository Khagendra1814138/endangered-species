const mongoose = require("mongoose")

const mammelsSchema = mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model("mammels", mammelsSchema)