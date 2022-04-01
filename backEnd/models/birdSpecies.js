const mongoose = require("mongoose")

const EndangeredBirdsSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("EndangeredBirds", EndangeredBirdsSchema)