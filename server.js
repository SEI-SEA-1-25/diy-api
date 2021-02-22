const rowdy = require('rowdy-logger');
const express = require('express');
const models = require('./models');

const app = express();
const PORT = process.env.PORT || 4000;
const rowdyResults = rowdy.begin(app)

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Test')
})

app.use('./bread', require('./controller/breadController'))
app.use('./dogs', require('./controller/dogController'))


app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})
