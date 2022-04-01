const mongoose = require("mongoose")

const EndangeredFungiSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("EndangeredFungus", EndangeredFungiSchema)