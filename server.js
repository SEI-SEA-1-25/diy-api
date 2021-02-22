// Required modules
const express = require("express");
const rowdy = require("rowdy-logger");
const db = require("./models");

// Variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app);

// Middleware
app.use(express.urlencoded({ extended: false }));

// Controllers

// Routes 
app.get("/", (req, res) => {
    res.send("Hi from express!")
});

app.get("/neopets", async (req, res) => {
    try {
        const neopets = await db.neopet.findAll();
        res.send(neopets);
    } catch (err) {
        console.log(err)
    }
});

app.get("/neopets/:id", async (req, res) => {
    try {
        const neopet = await db.neopet.findByPk(req.params.id)
        res.send(neopet)
    } catch (err) {
        console.log(err)
    }
})

app.post("/neopets", async (req, res) => {
    try {
        const newNeopet = await db.neopet.create({
            hails_from: req.body.hails_from,
            species: req.body.species,
            name: req.body.name
        })
        res.send(newNeopet)
    } catch (err) {
        console.log(err)
    }
})

app.put("/neopets/:id", async (req, res) => {
    try{
        const neopet = await db.neopet.findByPk(req.params.id);
        const updatedNeopet = await neopet.update({
            hails_from: req.body.hails_from,
            species: req.body.species,
            name: req.body.name 
        })
        res.send(updatedNeopet)
    } catch (err) {
        console.log(err)
    }
})

app.delete("/neopets/:id", async (re, res) => {
    try {
        const neopet = await db.creature.findByPk(rew.params.id);
        const deletedNeopet = neopet.destroy();
        res.send(deletedNeopet)
    } catch (err) {
        console.log(err)
    }
})

// Start the server
app.listen(PORT, () => {
    rowdyResults.print();
    console.log(`Server is listening on port ${PORT}`);
  });