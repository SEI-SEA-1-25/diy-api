const router = require('express').Router()
const db = require('../models')


router.get('/', async (req, res) => {
    try{
        const players = await db.player.findAll()
        res.send(players)

    } catch(err) {
        console.log(err)
    }
})


router.get('/:id', async (req, res) => {
    try{
        const player = await db.player.findByPk(req.params.id)
        res.send(player)

    } catch(err) {
        console.log(err)
    }
})


router.post('/', async (req, res) => {
    try{
        const newPlayer = await db.player.create({
            name: req.body.name,
            position: req.body.position,
            number: req.body.number,
            nationality: req.body.nationality
        })
        res.send(newPlayer);

    } catch(err) {
        console.log(err)
    }
})


router.put('/:id', async (req, res) => {
    try{
        const player = await db.player.findByPk(req.params.id)

        const updatePlayer = await player.update({
            name: req.body.name,
            position: req.body.position,
            number: req.body.number,
            nationality: req.body.nationality
        })
        res.send(updatePlayer);

    } catch(err) {
        console.log(err)
    }
})



router.delete('/:id', async (req, res) => {
    try{
        const player = await db.player.findByPk(req.params.id)
        const deletedPlayer = await player.destroy();
        res.send(deletedPlayer);


    } catch(err) {
        console.log(err)
    }
})








module.exports = router