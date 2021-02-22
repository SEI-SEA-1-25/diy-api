//Required Modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')

//Variables 
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

//Controllers
app.use('/fragrances', require('./controllers/fragranceController'))
app.use('/parfume_descriptions', require('./controllers/descriptionController'))

// Middleware
app.use(express.urlencoded({ extended: false }))
// urlencoded gets the form data from the request and puts it inside of
// req.body

//Routes
app.get('/', (req, res) => {
    res.send('Heyy!')
})


app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})