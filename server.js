//required modules
const express =require('express')
const rowdy = require('rowdy-logger')
const db =require('./models')
//variables

const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)


//Middleware
app.use(express.urlencoded({ extended: false}))
//urlencoded gets the form data from the request and puts it inside of req body

//Routes
app.get('/', (req,res) => {
    res.send('hello world from express...hi')
})


//CRUD route for warriors
//Index (Read all) Route
app.get('/warriors', async (req,res) => {
    try {
        const warriors = await db.warrior.findAll()
        res.send(warriors)
    } catch (err) {
        console.log(err)
    }
})
// Show (Show One) Route
app.get('/warriors/:id', async (req, res) => {
    try {
        const warrior = await db.warrior.findByPk(req.params.id)
        res.send(warrior)
    } catch (err) {
        console.log(err)
    }
})

app.post('/warriors',async(req,res) => {
    try {
        //console.log(req.body);
        const newWarrior =await db.warrior.create({
            player_name:req.body.player_name,
            previous_team:req.body.previous_team,
            salary:req.body.salary,
            height:req.body.height
        })
        res.send(newWarrior);
    } catch(err) {
        console.log(err)
    }
})

app.put('/warriors/:id' , async(req,res) => {
    try {
        const warrior = await db.warrior.findByPk(req.params.id)
        const updatedWarrior = await warrior.update({
            player_name: req.body.player_name,
            previous_team:req.body.previous_team,
            salary:req.body.salary,
            height:req.body.height
        })
        res.send(updatedWarrior)
    } catch(err) {
        console.log(err)

    }
})

app.delete('/warriors/:id' ,async(req,res) => {
    try {
        const warrior =await db.warrior.findByPk(req.params.id)
        const deletedWarrior = await warrior.destroy();
        res.send(deletedWarrior);
    } catch {

    }
})









//start the server
    app.listen(PORT, () => {
        rowdyResults.print()
        console.log(`server is listening on port $(PORT)`)
    })

