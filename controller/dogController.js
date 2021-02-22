const models = require('../models')
const router = require('express').Router()




router.get('/', async (req, res) => {
    try{
        const dog = await models.dog.findAll()
        res.send(dog)

    }catch(err){
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try{
        const createDog = await models.dog.create({
            name: req.body.name,
            personality: req.body.personality,
            ranking: req.body.ranking,
            group: req.body.group,
            size: req.body.size
        })
        res.send(createDog)
    }catch(err){
        console.log(err)
    }
})


router.get('/:id', async (req, res) => {
    try{
        const dog = await models.dog.findByPk(req.params.id)
        res.send(dog)
    }catch(err){
        console.log(err)
    }
})



router.put('/:id', async (req, res) => {
    try{
        const dogs = await models.dog.findByPk(req.params.id)
        const updateDog = await dogs.update({
            name: req.body.name,
            personality: req.body.personality,
            ranking: req.body.ranking,
            group: req.body.group,
            size: req.body.size
        })
        res.send(updateDog)
    }catch(err){
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const dog = await models.dog.findByPk(req.params.id)
        const deleteDog = await dog.destroy()
        res.send(deleteDog)
    }catch(err){
        console.log(err)
    }
})

module.exports = router