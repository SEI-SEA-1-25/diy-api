// console.log('hi')
const express = require('express');
const app = express();
const rowdy = require('rowdy-logger');
const { noExtendLeft } = require('sequelize/types/lib/operators');
const models = require('./models')
app.use(express.urlencoded({extended: false}))

const rowdyRes = rowdy.begin(app)

app.use((req, res) => {
    console.log('request coming in')
})
app.get('/', (req, res, next) => {
    res.send('hello from root mod');
    next()
})

app.use('/songs', require('./controllers/songsController'))

app.use('/albums', require('./controllers/albumsController'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('server started');
    rowdyRes.print()
})
