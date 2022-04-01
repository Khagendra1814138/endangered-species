const mongoose = require("mongoose")

const EndangeredAmphibiansSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("EndangeredAmphibians", EndangeredAmphibiansSchema)