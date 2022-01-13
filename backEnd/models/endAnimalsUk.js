const mongoose = require("mongoose")

const UkAnimalSchema = mongoose.Schema({
    name: String,
    speciesType: String,
})

module.exports = mongoose.model("UkEndAnimals", UkAnimalSchema)