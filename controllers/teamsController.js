const router = require('express').Router()
const db = require('../models')



router.get('/', async (req, res) => {
    try{
        const teams = await db.team.findAll()
        res.json(teams)

    } catch (err) {
        console.log(err)
    }

})

router.get('/:id', async (req, res) => {
    try{
        const team = await db.team.findByPk(req.params.id)
        res.send(team)

    } catch(err) {
        console.log(err)
    }
})


router.post('/', async (req, res) => {
    try{
        const newTeam = await db.team.create({
            name: req.body.name,
            founded: req.body.founded
        })
        res.send(newTeam);

    } catch(err) {
        console.log(err)
    }
})

router.put('/:id', async (req, res) => {
    try{
        const team = await db.team.findByPk(req.params.id)

        const updateTeam = await team.update({
            name: req.body.name,
            founded: req.body.founded
            
        })
        res.send(updateTeam);

    } catch(err) {
        console.log(err)
    }
})



router.delete('/:id', async (req, res) => {
    try{
        const team = await db.team.findByPk(req.params.id)
        const deletedTeam = await team.destroy();
        res.send(deletedTeam);


    } catch(err) {
        console.log(err)
    }
})


router.post('/:id/players', async (req, res) => {
    try{
        const team = await db.team.findByPk(req.params.id)
        const newPlayer = await team.createPlayer({
            name: req.body.name,
            position: req.body.position,
            number: req.body.number,
            nationality: req.body.nationality
        })
        res.send(newPlayer)

    } catch(err){
        console.log(err)
    }
})




router.get('/:id/players', async (req, res) => {
    try{
        const team = await db.team.findByPk(req.params.id)

        const players = await team.getPlayers()
        res.send(players)

    } catch(err) {
        console.log(err)
    }
})


router.delete('/:id/players', async (req, res) => {
    try{
        const team = await db.team.findByPk(req.params.id)

        const player = await team.player.findByPk(req.params.id)
        const deletedPlayer = await player.destroy();
        res.send(deletedPlayer);


    } catch(err) {
        console.log(err)
    }
})








module.exports = router 