//const models = require('../models')




app.get('/dogs', async (req, res) => {
    try{
        const dog = await models.dog.findAll()
        res.send(dog)

    }catch(err){
        console.log(err);
    }
})

app.post('/dogs', async (req, res) => {
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


app.get('/dogs/:id', async (req, res) => {
    try{
        const dog = await models.dog.findByPk(req.params.id)
        res.send(dog)
    }catch(err){
        console.log(err)
    }
})



app.put('/dogs/:id', async (req, res) => {
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

app.delete('/dogs/:id', async (req, res) => {
    try{
        const dog = await models.dog.findByPk(req.params.id)
        const deleteDog = await dog.destroy()
        res.send(deleteDog)
    }catch(err){
        console.log(err)
    }
})
