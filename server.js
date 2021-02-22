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