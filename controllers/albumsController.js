const express = require('express').Router()
const models = require('./models')

app.get('/', (req, res) => {
    models.album.findAll().then(
        (albums) => {
        res.json({ albums })
    })
})

app.post('/', (req, res) => {
    models.album.create({
        artist: req.body.artist,
        title: req.body.title,
        numberOfTracks: req.body.numberOfTracks
    }).then((album) => {
        res.json({album})
    })
})

router.post('/:id/songs', async (req, res) => {
    const album = await models.album.findByPk(req.params.id)
    const song = await album.createSong({
        title: req.body.title,
        albumId: req.body.albumId
    })
    res.json({song})
})

router.get('/:id/songs', async (req, res) => {
    const album = await models.album.findByPk(req.params.id)
    const songs = await album.getSongs()
    res.json({songs})
})

module.exports = router