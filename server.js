//required modules
const express =require('express')
const rowdy = require('rowdy-logger')
const db =require('./models')
//variables

const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)



// const PORT = process.env.PORT || 3000
// app.listen(PORT,() => {
//     console.log('server started !');
    // rowdyResults()
// })


//Middleware
app.use(express.urlencoded({ extended: false}))
//urlencoded gets the form data from the request and puts it inside of req body

//controller
app.use('/warriors',require('./controllers/warriorController'))


//Routes
app.get('/', (req,res) => {
    res.send('hello world from express...hi')
})




//CRUD routes for championship
//Index (show all)
app.get('/championships',async (req,res) => {
    try {
        const championships = await db.championship.findAll();
        res.send(championships);
    } catch(err) {
        console.log(err)
    }
})

//show (Read one)
app.get('/championships/:id',async (req,res) => {
    try {
        const championship = await db.championship.findByPk(req.params.id)
        res.send(championship)
    } catch(err) {
        console.log(err)
    }
})








//start the server
    app.listen(PORT, () => {
        rowdyResults.print()
        console.log(`server is listening on port $(PORT)`)
    })

