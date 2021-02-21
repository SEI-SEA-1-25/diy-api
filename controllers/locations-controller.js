const express = require('express')
const db = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
      try {
            const newLocation = await db.location.create({
                  street: req.body.street,
                  region: req.body.region,
                  bus: req.body.bus
            })
            res.send(newLocation)
      } catch (error) {
            console.log(error)
      }
})


// Show (Show One) Route
router.get('/:id', async (req, res) => {
      try {
            const location = await db.location.findbyPk(req.params.id)
            res.send(location)
      } catch (error) {
            console.log(error)
      }
})

// Index (Read All) Route
router.get('/', async (req, res) => {
      try {
            const locations = await db.location.findAll()
            res.send(locations)
      } catch (error) {
            console.log(error)
      }
})

// Update Route
router.put('/:id', async (req, res) => {
      try {
            const location = await db.location.findByPk(req.params.id)
            const updatedLocation = await location.update({
                  street: req.body.street,
                  region: req.body.region,
                  bus: req.body.bus
            })
            res.send(updatedLocation)
      } catch (error) {
            console.log(error)
      }
})

// Delete Route
router.delete('/:id', async (req, res) => {
      try {
            const location = await db.location.findByPk(req.params.id)
            const deletedLocation = await location.destroy();
            res.send(deletedLocation)
      } catch (error) {
            console.log(error)
      }
})

module.exports = router