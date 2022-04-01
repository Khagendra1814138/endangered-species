const mongoose = require("mongoose")

const EndangeredArticSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("EndangeredArticSpecies", EndangeredArticSchema)