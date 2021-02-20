// Required Modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')
const restaurants = require('./controllers/restaurants-controller')
const locations = require('./controllers/locations-controller')

// Variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

// Middleware
app.use(express.urlencoded({ extended: false}))
// urlencoded gets the form data from the request and puts it inside of req.body

// Controllers
app.use('/restaurants', restaurants)
app.use('/locations', locations)

// Routes
app.get('/', (req, res) => {
      res.send('Hello World!')
})

// Start the server!
app.listen(PORT, () => {
      rowdyResults.print()
      console.log(`server is listening on port ${PORT}`)
})