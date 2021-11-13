const express = require("express")
const animal = require("./models/animals") // new
const user = require("./models/users") // new
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







router.get("/users", async (req, res) => {
    const posts = await user.find()
    res.send(posts)
})

// router.get("/animals/:species", async (req, res) => {
//     const species = req.params.species;
//     const posts = await animal.find({speciesType:species})
//     res.send(posts)
// })

router.post("/users", async (req, res) => {
    const newUser = new user(
      req.body //short way gives the whole thing
    )
    await newUser.save()
    res.send(newUser)
})

module.exports = router