const mongoose = require("mongoose")

const EndangeredPlantsSchema = mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model("EndangeredPlants", EndangeredPlantsSchema)