const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
    try{
        const bread = await models.bread.findAll()
        res.send(bread)
    }catch(err){
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const bread = await models.bread.findByPk(req.params.id)
        res.send(bread)
    }catch(err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
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

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    try {
        const bread = await models.bread.findByPk(req.params.id)
        const deleteBread = await bread.destroy()
        res.send(deleteBread)
    }catch(err) {
        console.log(err)
    }
})

module.exports = router