const express = require('express')
// const db = require('./models')
const PORT = 2000;
const rowdy = require('rowdy-logger')
const app = express()
const rowdyResults = rowdy.begin(app)

app.use(express.urlencoded({ extended: false }))

app.use('/players', require('./controllers/playercontrol'))
app.use('/clubs', require('./controllers/clubcontrol'))

app.get('/', (req, res) => {
    res.send(`HELLO`)
})

app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`);
})