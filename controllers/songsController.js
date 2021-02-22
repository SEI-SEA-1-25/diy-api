const router = require('express').Router()
const db = require('../models')


module.exports= router;

router.get('/', async (req, res) => {
    try{
        const songs = await db.song.findAll()
        res.send(songs)
    }catch(err){
    console.log(err)

    }
})

router.get ('/:id', async (req, res) => {
    try{
     const song = await db.song.findByPk(req.params.id)
     res.send(song)
    }catch(err){
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try{
        const newSong = await db.song.create({
            song_title: req.body.song_title,
            song_length: req.body.song_length
        })
        res.send(newSong)
    }catch(err){
        console.log(err)
    }
})

router.put('/:id', async (req, res) => {
    try{
        const song = await db.song.findByPk(req.params.id)
        const updatedSong = await song.update({
            song_title: req.body.song_title,
            song_length: req.body.song_length
        })
        res.send(updatedSong)
    }catch(err){
        console.log(err)
    }
})

router.delete ('/:id', async (req, res) => {
    try{
     const song = await db.song.findByPk(req.params.id)
     const deletedSong = await song.destroy();
     res.send(deletedSong)
    }catch(err){
        console.log(err)
    }
})

