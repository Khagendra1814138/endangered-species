const mongoose = require("mongoose")

const UkAnimalSchema = mongoose.Schema({
    name: String,
    speciesType: String,
    location: String,
})

module.exports = mongoose.model("UkEndAnimals", UkAnimalSchema)