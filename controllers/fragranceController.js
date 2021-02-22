const router = require('express').Router()
const db = require('../modules')

//CRUD routes for fragrance

//Index (read all) Route
router.get('/', async (req, res) => {
    try {
    const fragrances = await db.fragrance.findAll()
    res.send(fragrances)
    } catch (err) {
        console.log(err);
    }
})

//show one route
router.get('/:id', async (req, res) => {
    try {
    const fragrance = await db.fragrance.findByPk(req.params.id)
    res.send(fragrance)
    } catch (err) {
        console.log(err);
    }
})

//create route
router.post('/', async (req, res) => {
    try {
    const newFragrance = await db.fragrance.create({
        brand: req.body.brand,
        parfume_name: req.body.parfume_name,
        size: req.body.size,
        price: req.body.price
    })
    res.send(newFragrance);
    } catch (err) {
        console.log(err);
    }
})

//update route
router.put('/:id', async (req, res) => {
   try {
   const fragrance = await db.fragrance.findByPk(req.params.id)
    const updatedFragrance = await  fragrance.update({
        brand: req.body.brand,
        parfume_name: req.body.parfume_name,
        size: req.body.size,
        price: req.body.price 
    })
    res.send(updatedFragrance);
    } catch (err) {
        console.log(err);
    }
})

//delete route 
router.delete('/:id', async (req, res) => {
    try {
        const fragrance = await db.fragrance.findByPk(req.params.id)
        const deletedFragrance = await fragrance.destroy();
        res.send(deletedFragrance);
    } catch (err) {
        console.log(err);
    }
})



module.exports = router;