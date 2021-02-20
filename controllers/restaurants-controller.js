const express = require('express')
const db = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
      try {
            const newRestaurant = await db.restaurant.create({
                  name: req.body.name,
                  cuisine: req.body.cuisine,
                  chef: req.body.chef,
                  street: req.body.street
            })
            res.send(newRestaurant)
      } catch (error) {
            console.log(error)
      }
})


// Show (Show One) Route
router.get('/:id', async (req, res) => {
      try {
            const restaurant = await db.restaurant.findbyPk(req.params.id)
            res.send(restaurant)
      } catch (error) {
            console.log(error)
      }
})

// Index (Read All) Route
router.get('/', async (req, res) => {
      try {
            const restaurants = await db.restaurant.findAll()
            res.send(restaurants)
      } catch (error) {
            console.log(error)
      }
})

// Update Route
router.put('/:id', async (req, res) => {
      try {
            const restaurant = await db.restaurant.findByPk(req.params.id)
            const updatedRestaurant = await restaurant.update({
                  name: req.body.name,
                  cuisine: req.body.cuisine,
                  chef: req.body.chef,
                  street: req.body.street
            })
            res.send(updatedRestaurant)
      } catch (error) {
            console.log(error)
      }
})

// Delete Route
router.delete('/:id', async (req, res) => {
      try {
            const restaurant = await db.restaurant.findByPk(req.params.id)
            const deletedRestaurant = await restaurant.destroy();
            res.send(deletedRestaurant)
      } catch (error) {
            console.log(error)
      }
})

module.exports = router