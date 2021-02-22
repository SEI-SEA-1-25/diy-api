const router = require('express').Router()

const db = require('../models')

router.get('/', async (req, res) => {
    try {
        const allClubs = await db.club.findAll()
        res.send(allClubs) 
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const createClub = await db.club.create({
            name: req.body.name,
            yearfound: req.body.yearfound
        })
        res.send(createClub) 
    } catch (err) {
        console.log(err);
    }
})

// router.put('/:id/players', async (req, res) => {
//     try {
//         const pickClub = await db.club.findByPk(req.params.id)
//         const player = await pickClub.putPlayer({
//             where: {
//                 name: req.body.name,
//             }
//         })
//         res.send(player)
//     } catch (err) {
//         console.log(err);
//     }
// })



module.exports = router;