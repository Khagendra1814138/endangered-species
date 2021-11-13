const mongoose = require("mongoose")

const animalSchema = mongoose.Schema({
    name: String,
    speciesType: String,
})

module.exports = mongoose.model("Animal", animalSchema)