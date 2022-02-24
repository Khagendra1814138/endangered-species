const mongoose = require("mongoose")

const EndangeredBirdsSchema = mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model("EndangeredBirds", EndangeredBirdsSchema)