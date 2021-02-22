const router = require('express').Router()
const db = require('../models')



router.get('/:id', async (req, res) => {
    try {
        const findOnePlayer = await db.player.findByPk(req.params.id)
        res.send(findOnePlayer)
    } catch (error) {
        console.log(error);   
    }
})

router.get('/', async (req, res) => {
    try {
        const findAllPlayer = await db.player.findAll()
        res.send(findAllPlayer)    
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const onePlayer = await db.player.findByPk(req.params.id)
        const updatePlayer = await onePlayer.update({
            club: req.body.club,
            age: req.body.age
        })
        res.send(updatePlayer)
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const addPlayer = await db.player.create({
            name: req.body.name,
            age: req.body.age,
            nationality: req.body.nationality,
            club: req.body.club
        })
        res.send(addPlayer)
    } catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const player = await db.player.findByPk(req.params.id)
        const deletePlayer = player.destroy()
        res.send(deletePlayer)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
