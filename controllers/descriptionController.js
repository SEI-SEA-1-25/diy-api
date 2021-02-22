const router = require('express').Router()
const db = require('../modules')

//CRUD routes for fragrance

//Index (read all) Route
router.get('/parfume_descriptions', async (req, res) => {
    try {
    const descriptions = await db.parfume_description.findAll()
    res.send(descriptions)
    } catch (err) {
        console.log(err);
    }
})

//show one route
router.get('/parfume_descriptions/:id', async (req, res) => {
    try {
    const description = await db.parfume_description.findByPk(req.params.id)
    res.send(description)
    } catch (err) {
        console.log(err);
    }
})

//create route
router.post('/parfume_descriptions', async (req, res) => {
    try {
    const newDescription = await db.parfume_description.create({
        type: req.body.type,
        for: req.body.for
    })
    res.send(newDescription);
    } catch (err) {
        console.log(err);
    }
})

//update route
router.put('/parfume_descriptions/:id', async (req, res) => {
   try {
   const description = await db.parfume_description.findByPk(req.params.id)
    const updatedFDescription = await  description.update({
        type: req.body.type,
        for: req.body.for 
    })
    res.send(updatedFDescription);
    } catch (err) {
        console.log(err);
    }
})

//delete route 
router.delete('/parfume_descriptions/:id', async (req, res) => {
    try {
        const description = await db.parfume_description.findByPk(req.params.id)
        const deletedDescription = await description.destroy();
        res.send(deletedDescription);
    } catch (err) {
        console.log(err);
    }
})


module.exports = router