// modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')

// variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

// routes
app.get('/', (req, res) => {
    res.send('I like doggos!')
})

// index routes - read all
app.get('/dogs', async (res, res) => {
    try {
        const dogs = await db.dog.findAll()
    } catch (error) {
        console.log(error)
    }
})

// show route
app.get('./dogs/:id', async (req, res) => {
    try {
        const dog = await db.dog.findByPK(req.params.id)
    } catch (error) {
        console.log(error)
    }
})

// create
app.post('/dogs', async (req, res) => {
    try {
        const newDog = await db.dog.create({
            name: req.body.name,
            breed: req.body.breed,
            loud: req.body.loud
        })
        res.send(newDog)
    } catch (error) {
        console.log(error)
    }
})

// update
app.put('/dogs/:id', async (req, res) => {
    try {
        const dog = await db.dog.findByPK(req, params.id)
        const updatedDog = await dog.update({
            name: req.body.name,
            breed: req.body.breed,
            loud: req.body.loud
        })
        res.send(updatedDog)
    } catch (error) {
        console.log(error)
    }
})

// delete
app.delete('/dog/:id', async (req, res) => {
    try {
        const dog = await db.dog.findByPK(req, params.id)
        const deleteDog = await dog.destroy();
        res.send(deleteDog)
    } catch (error) {
        console.log(error)
    }
})

// Start the server!
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})