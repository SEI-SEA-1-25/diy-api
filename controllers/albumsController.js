
const router = require('express').Router()
const db = require('../models')


module.exports = router;

router.get('/', async (req, res) => {
    try{
        const albums = await db.album.findAll()
        res.send(albums)
    }catch(err){
    console.log(err)

    }
})

    //READ ONE
router.get('/:id', async (req, res) => {
    try {
        const album = await db.album.findByPk(req.params.id)
        res.send(album)
    }catch(err){
        console.log(err)
    }
})

    //POST or CREATE DATA in Database ROUTE
router.post('/', async (req, res) => {
    try{
        // console.log(req.body)
        const newAlbum = await db.album.create({
            album_title: req.body.album_title,
            release_year: req.body.release_year,
            total_songs: req.body.total_songs
        })
        res.send(newAlbum);
    }catch(err){
     console.log(err)
    }
})

    // UPDATE data within the 

router.put('/:id', async (req, res)=> {
    try{
      const album = await db.album.findByPk(req.params.id)
      const updatedAlbum = await album.update({
        album_title: req.body.album_title,
        release_year: req.body.release_year,
        total_songs: req.body.total_songs
      })
      console.log(updatedAlbum)
      res.send(updatedAlbum)
    }catch(err){
        console.log(err)
    }
})

    // DELETE or Destroy out of the database
router.delete('/:id', async (req, res)=> {
    try{
    const album = await db.album.findByPk(req.params.id)
    const deletedAlbum = await album.destroy();
    res.send(deletedAlbum)
    }catch(err){
        console.log(err)
    }
})

/// To add a new Song that belongs to an album
router.post('/:id/songs', async (req, res) => {
    try{
        // console.log(req.body)
        const album = await db.album.findByPk(req.params.id)
        const newSong = await album.createSong({
            song_title: req.body.song_title,
            song_length: req.body.song_length
        })
        res.send(newSong);
    }catch(err){
     console.log(err)
    }
})

router.get('/:id/songs', async (req, res) => {
    try{
        const album = await db.album.findByPk(req.params.id)
        const songs = await album.getSongs()
        res.send(songs)
    }catch(err){
        console.log(err)
    }
})