//Required Modules
const express = require('express')

//Variables
const app = express ();
const PORT = 3000;


app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World! How are you')
})