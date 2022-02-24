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
//Endangered Species Uk
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
//Endangered Species Uk
router.post("/aquaticSpecies", async (req, res) => {
    const newEndangeredAquaticSpecies = new endangeredAquatic({
        name: req.body.AquaticName,
        type: req.body.AquaticType,
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
//Endangered Species Uk
router.post("/amphibianSpecies", async (req, res) => {
    const newEndangeredAmphibianSpecies = new endangeredAmphibians({
        name: req.body.AmphibianName,
        type: req.body.AmphibianType,
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
    })
    console.log(req.body);
    await newEndangeredBirdSpecies.save()
    res.send(newEndangeredBirdSpecies)
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