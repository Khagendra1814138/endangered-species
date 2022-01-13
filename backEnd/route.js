const express = require("express")

const animal = require("./models/animals") // new
const user = require("./models/users") // new
const endangeredSpeciesUk = require("./models/endAnimalsUk") // new

const router = express.Router()


// Get all posts
router.get("/animals", async (req, res) => {
    const posts = await animal.find()
    res.send(posts)
})

router.get("/animals/:species", async (req, res) => {
    const species = req.params.species;
    const posts = await animal.find({speciesType:species})
    res.send(posts)
})

router.post("/animals", async (req, res) => {
    const animalNew = new animal({
        name: req.body.name,
        speciesType: req.body.speciesType,
    })
    await animalNew.save()
    res.send(animalNew)
})

////////////////////////////////User_Database//////////////////////////////////////////////////////////////////
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
////////////////////////////////User_Database///////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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