//Required Modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')

//Variables
const app = express ();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

//Middleware
app.use(express.urlencoded({ extended: false}))

//urlencoded gets the form data from the request and puts it inside of the req.body


//Start the server
app.listen(PORT, ()=> {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})

//Routes
app.get('/', (req, res) => {
    res.send('Hello World! How are you')
})

// CRUD routes

    //READ ALL
app.get('/albums', async (req, res) => {
    try{
        const albums = await db.album.findAll()
        res.send(albums)
    }catch(err){
    console.log(err)

    }
})

    //READ ONE
app.get('/albums/:id', async (req, res) => {
    try {
        const album = await db.album.findByPk(req.params.id)
        res.send(album)
    }catch(err){
        console.log(err)
    }
})

    //POST or CREATE DATA in Database ROUTE
app.post('/albums', async (req, res) => {
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

app.put('/albums/:id', async (req, res)=> {
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
app.delete('/albums/:id', async (req, res)=> {
    try{
    const album = await db.album.findByPk(req.params.id)
    const deletedAlbum = await album.destroy();
    res.send(deletedAlbum)
    }catch(err){
        console.log(err)
    }
})


// CRUD Routes for  


