const router = require('express').Router()
const db = require('../models')

//Create One
router.post('/', async (req, res) => {
    try {
        const newPurple = await db.purple.create({
            name: req.body.name,
            hex: req.body.hex,
            rgb: req.body.rgb,
            hsl: req.body.hsl,
            description: req.body.description
        })
        res.send(newPurple);
    } 
    catch (error) {
        console.log(error)
    }
})

//Show One Route
router.get('/:id', async (req, res) => {
    try {
        const purple = await db.purple.findByPk(req.params.id)
        res.send(purple)
    } 
    catch (error) {
        console.log(error)
    }
})

//Index (Read All) Route 
router.get('/', async (req, res) => {
    try {
        const allPurples = await db.purple.findAll()
        res.send(allPurples)
    } 
    catch (error) {
        console.log(error)
    }
})

// Update One
router.put('/:id', async (req, res) => {
    try {
        const purple = await db.purple.findByPk(req.params.id)
        const updatePurple = await purple.update({
            name: req.body.name,
            hex: req.body.hex,
            rgb: req.body.rgb,
            hsl: req.body.hsl,
            description: req.body.description,
            colorId: req.body.colorId
        })
        res.send(updatePurple)
    } 
    catch (error) {
        console.log(error)
    }
})

//Delete One
router.delete('/:id', async (req, res) => {
    try {
        const purple = await db.purple.findByPk(req.params.id)
        const deletePurple = await purple.destroy();
        res.send(deletePurple)
    } 
    catch (error) {
        console.log(error)
    }
})

module.exports = router;