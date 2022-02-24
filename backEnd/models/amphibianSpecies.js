const mongoose = require("mongoose")

const EndangeredAmphibiansSchema = mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model("EndangeredAmphibians", EndangeredAmphibiansSchema)