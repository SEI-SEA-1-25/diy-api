const router = require('express').Router()
const db = require('../models')



//CRUD route for warriors

//Index (Read all) Route

router.get('/', async (req,res) => {
    try {
        const warriors = await db.warrior.findAll()
        res.send(warriors)
    } catch (err) {
        console.log(err)
    }
})
// Show (Show One) Route
router.get('/:id', async (req, res) => {
    try {
        const warrior = await db.warrior.findByPk(req.params.id)
        res.send(warrior)
    } catch (err) {
        console.log(err)
    }
})

router.post('/',async(req,res) => {
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

router.put('/:id' , async(req,res) => {
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

router.delete('/:id' ,async(req,res) => {
    try {
        const warrior =await db.warrior.findByPk(req.params.id)
        const deletedWarrior = await warrior.destroy();
        res.send(deletedWarrior);
    } catch {

    }
})




    module.exports =router;