const mongoose = require("mongoose")

const EndangeredAquaticSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("EndangeredAquaticSpecies", EndangeredAquaticSchema)