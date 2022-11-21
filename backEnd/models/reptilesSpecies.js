const mongoose = require("mongoose")

const reptilesSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("reptiles", reptilesSchema)