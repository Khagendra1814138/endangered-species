const mongoose = require("mongoose")

const EndangeredAquaticSchema = mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model("EndangeredAquaticSpecies", EndangeredAquaticSchema)