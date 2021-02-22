// const { text } = require('express');
const express = require('express')
const rowdy = require('rowdy-logger');
// const { INTEGER } = require('sequelize/types');
const db = require('./models')



const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)



app.use(express.urlencoded({ extended: false }))



app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/players', require('./controllers/playersController'))
app.use('/teams', require ('./controllers/teamsController'))








app.listen(PORT, ()=>{
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})    


 