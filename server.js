//Required Modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')
const albumsController = require('./controllers/albumsController') 
const songsController = require('./controllers/songsController')

//Variables
const app = express ();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

//Middleware
app.use(express.urlencoded({ extended: false}))
//urlencoded gets the form data from the request and puts it inside of the req.body


// Controllers
app.use('/albums', albumsController)
app.use('/songs', songsController)

//Start the server
app.listen(PORT, ()=> {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})



