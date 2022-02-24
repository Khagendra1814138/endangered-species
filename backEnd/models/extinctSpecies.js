const mongoose = require("mongoose")

const ExtinctSpeciesSchema = mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model("ExtinctSpecies", ExtinctSpeciesSchema)