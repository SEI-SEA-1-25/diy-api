const rowdy = require('rowdy-logger');
const express = require('express');
const models = require('./models');

const app = express();
const PORT = 4000;
const rowdyResults = rowdy.begin(app)

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Test')
})


app.get('/bread', async (req, res) => {
    try{
        const bread = await models.bread.findAll()
        res.send(bread)
    }catch(err){
        console.log(err)
    }
})

app.get('/bread/:id', async (req, res) => {
    try {
        const bread = await models.bread.findByPk(req.params.id)
        res.send(bread)
    }catch(err) {
        console.log(err)
    }
})

app.post('/bread', async (req, res) => {
    try{
        const creatBread = await models.bread.create({
            name: req.body.name,
            adress: req.body.adress,
            phone: req.body.phone,
            email: req.body.email
        })
        res.send(creatBread)
    }catch(err){
        console.log(err)
    }
})

app.put('/bread/:id', async (req, res) => {
    try {
        const bread = await models.bread.findByPk(req.params.id)
        const updateBread = await bread.update({
            name: req.body.name,
            adress: req.body.adress,
            phone: req.body.phone,
            email: req.body.email
        })
        res.send(updateBread)
    }catch(err) {
        console.log(err)
    }
})

app.delete('/bread/:id', async (req, res) => {
    try {
        const bread = await models.bread.findByPk(req.params.id)
        const deleteBread = await bread.destroy()
        res.send(deleteBread)
    }catch(err) {
        console.log(err)
    }
})

app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})
