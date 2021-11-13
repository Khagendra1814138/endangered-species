const express = require("express")
const mongoose = require("mongoose") // new
const route = require("./route") // new

// Connect to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/thisisthename", { useNewUrlParser: true })
    .then(() => {
        const app = express()
        app.use(express.json())

        app.use("/api", route)

        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })