const mongoose = require("mongoose")

const EndangeredFungiSchema = mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model("EndangeredFungus", EndangeredFungiSchema)