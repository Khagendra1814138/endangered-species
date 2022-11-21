const mongoose = require("mongoose")

const insectsSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("insects", insectsSchema)