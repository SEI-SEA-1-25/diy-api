//required modules 
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')

//variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app);

//Middleware
app.use(express.urlencoded({extended: false}));

//routes
app.get('/', (req, res)=> {
    res.send('Hello World, this is Sarah Marie')
})

app.use('/purples', require('./controllers/purpleController'));

app.listen(PORT, ()=> {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
});