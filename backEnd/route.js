const express = require("express")

const mammelSpecies = require("./models/mammelsSpecies") // new
const user = require("./models/users") // new
const endangeredSpeciesUk = require("./models/endAnimalsUk") // new
const endangeredBirds = require("./models/birdSpecies") // new
const endangeredAmphibians = require("./models/amphibianSpecies") // new
const endangeredFungus = require("./models/fungiSpecies") // new
const endangeredPlants = require("./models/plantSpecies") // new
const endangeredAquatic = require("./models/aquaticSpecies") // new
const endangeredArtic = require("./models/articSpecies") // new

const endangeredReptiles = require("./models/reptilesSpecies") // new
const endangeredInsects = require("./models/insectSpecies") // new

const extinctSpecies = require("./models/extinctSpecies") // new

const router = express.Router()


// Get all posts
router.get("/mammelsSpecies", async (req, res) => {
    const posts = await mammelSpecies.find()
    res.send(posts)
})

router.get("/mammelsSpecies/:species", async (req, res) => {
    const species = req.params.species;
    const posts = await mammelSpecies.find({speciesType:species})
    res.send(posts)
})

router.post("/mammelsSpecies", async (req, res) => {
    const newMammelSpecies = new mammelSpecies({
        name: req.body.mammelName,
        type: req.body.mammelType,
        location: req.body.mammelLocation,
    })
    console.log(req.body);
    await newMammelSpecies.save()
    res.send(newMammelSpecies)
})



////////////////////////////////Extinct_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/extinctSpecies", async (req, res) => {
    const posts = await extinctSpecies.find()
    res.send(posts)
})
//Extinct species
router.post("/extinctSpecies", async (req, res) => {
    const newExtinctSpecies = new extinctSpecies({
        name: req.body.ExtinctSpeciesName,
        type: req.body.ExtinctSpeciesType,
    })
    console.log(req.body);
    await newExtinctSpecies.save()
    res.send(newExtinctSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////Artic_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/articSpecies", async (req, res) => {
    const posts = await endangeredArtic.find()
    res.send(posts)
})
//Endangered Species Uk
router.post("/articSpecies", async (req, res) => {
    const newEndangeredArticSpecies = new endangeredArtic({
        name: req.body.ArticName,
        type: req.body.ArticType,
        location: req.body.ArticLocation,
    })
    console.log(req.body);
    await newEndangeredArticSpecies.save()
    res.send(newEndangeredArticSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////Aquatic_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/aquaticSpecies", async (req, res) => {
    const posts = await endangeredAquatic.find()
    res.send(posts)
})
//Allows the user to post data to the database
router.post("/aquaticSpecies", async (req, res) => {
    const newEndangeredAquaticSpecies = new endangeredAquatic({
        name: req.body.AquaticName,
        type: req.body.AquaticType,
        location: req.body.AquaticLocation,
    })
    console.log(req.body);
    await newEndangeredAquaticSpecies.save()
    res.send(newEndangeredAquaticSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////Plants_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/plantSpecies", async (req, res) => {
    const posts = await endangeredPlants.find()
    res.send(posts)
})
//Endangered Species Uk
router.post("/plantSpecies", async (req, res) => {
    const newEndangeredPlantsSpecies = new endangeredPlants({
        name: req.body.PlantName,
        type: req.body.PlantType,
        location: req.body.PlantLocation,
    })
    console.log(req.body);
    await newEndangeredPlantsSpecies.save()
    res.send(newEndangeredPlantsSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////Fungi_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/fungiSpecies", async (req, res) => {
    const posts = await endangeredFungus.find()
    res.send(posts)
})
//Endangered Species Uk
router.post("/fungiSpecies", async (req, res) => {
    const newEndangeredFungusSpecies = new endangeredFungus({
        name: req.body.FungusName,
        type: req.body.FungusType,
        location: req.body.FungusLocation,
    })
    console.log(req.body);
    await newEndangeredFungusSpecies.save()
    res.send(newEndangeredFungusSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////Amphibians_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/amphibianSpecies", async (req, res) => {
    const posts = await endangeredAmphibians.find()
    res.send(posts)
})
//Endangered Species Amphibian
router.post("/amphibianSpecies", async (req, res) => {
    const newEndangeredAmphibianSpecies = new endangeredAmphibians({
        name: req.body.AmphibianName,
        type: req.body.AmphibianType,
        location: req.body.AmphibianLocation,
    })
    console.log(req.body);
    await newEndangeredAmphibianSpecies.save()
    res.send(newEndangeredAmphibianSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////Birds_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/birdSpecies", async (req, res) => {
    const posts = await endangeredBirds.find()
    res.send(posts)
})
//Endangered Species Uk
router.post("/birdSpecies", async (req, res) => {
    const newEndangeredBirdSpecies = new endangeredBirds({
        name: req.body.BirdName,
        type: req.body.BirdType,
        location: req.body.BirdsLocation,
    })
    console.log(req.body);
    await newEndangeredBirdSpecies.save()
    res.send(newEndangeredBirdSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////Reptiles_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/reptilesSpecies", async (req, res) => {
    const posts = await endangeredReptiles.find()
    res.send(posts)
})
//Endangered Species Uk
router.post("/reptilesSpecies", async (req, res) => {
    const newEndangeredReptileSpecies = new endangeredReptiles({
        name: req.body.ReptileName,
        type: req.body.ReptileType,
        location: req.body.ReptileLocation,
    })
    console.log(req.body);
    await newEndangeredReptileSpecies.save()
    res.send(newEndangeredReptileSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////INSECTs_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/insectSpecies", async (req, res) => {
    const posts = await endangeredInsects.find()
    res.send(posts)
})
//Endangered Species Uk
router.post("/insectSpecies", async (req, res) => {
    const newEndangeredInsectSpecies = new endangeredInsects({
        name: req.body.InsectName,
        type: req.body.InsectType,
        location: req.body.InsectLocation,
    })
    console.log(req.body);
    await newEndangeredInsectSpecies.save()
    res.send(newEndangeredInsectSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////EndangeredUk_Database//////////////////////////////////////////////////////////////////
// Get all posts
router.get("/endAnimalsUk", async (req, res) => {
    const posts = await endangeredSpeciesUk.find()
    res.send(posts)
})
//Endangered Species Uk
router.post("/endAnimalsUk", async (req, res) => {
    const newEndangeredUkSpecies = new endangeredSpeciesUk({
        name: req.body.UKname,
        speciesType: req.body.UKspeciesType,
        location: req.body.UkLocation,
    })
    console.log(req.body);
    await newEndangeredUkSpecies.save()
    res.send(newEndangeredUkSpecies)
})
///////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////User_Database/////////////////////////////////////////////////////////////////////////
//User database get
router.get("/users", async (req, res) => {
    const posts = await user.find()
    res.send(posts)
})
//User database post
router.post("/users", async (req, res) => {
    const newUser = new user(
      req.body //short way gives the whole thing
    )
    await newUser.save()
    res.send(newUser)
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



module.exports = router