const mongoose = require("mongoose")

const EndangeredArticSchema = mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model("EndangeredArticSpecies", EndangeredArticSchema)