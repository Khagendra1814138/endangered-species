const mongoose = require("mongoose")

const EndangeredPlantsSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
})

module.exports = mongoose.model("EndangeredPlants", EndangeredPlantsSchema)