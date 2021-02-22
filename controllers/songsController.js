const express = require('express').Router()
const models = require('./models')

app.get('/', (req, res) => {
    models.song.findAll().then(
        (songs) => {
        res.json({ songs })
    })
})

app.post('/', (req, res) => {
    models.song.create({
        title: req.body.title,
        albumId: req.body.albumId
    }).then((song) => {
        res.json({song})
    })
})

module.exports = router
