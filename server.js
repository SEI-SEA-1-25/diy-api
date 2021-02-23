const express = require('express')
const app = express('')
const rowdy = require('rowdy-logger')



const rowdyRes = rowdy.begin(app)
app.get('/', (req, res) => {
    res.send
})

app.listen(3000, () => {
    rowdyRes.print
})