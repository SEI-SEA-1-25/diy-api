const router = require('express').Router()
const db = require('../models')

// router.get('/testing', (req, res) => {
    //     res.send('hello from colors!')
    // })
    
//Read All Parents Route 
router.get('/', async (req, res) => {
    try {
        const colors = await db.colors.findAll()
        res.send(colors)
    } 
    catch (error) {
        console.log(error)
    }
})

// Read Parent of one child 
router.get('/:id/purples', async (req, res) => {
    try {
        const color = await db.color.findByPk(req.params.id)
        const purples = await color.getPurples()
        res.send(purples)
    } 
    catch (error) {
        console.log(error)
    }
})

//Create One Parent
router.post('/', async (req, res) => {
    try {
        const newColor = await db.color.create({
            name: req.body.name,
        })
        res.send(newColor);
    } 
    catch (error) {
        console.log(error)
    }
})
// // read all children of parent
// router.get('/:id/purples', async (req, res) => {
//     try{
//         const color = await db.color.findByPk(req.params.id)
//         const purples = await color.getPurples()
//         res.send(purples)

//     } catch (error) {
//         console.log(error)
//     }
// })
//Create child of parent
router.post('/:id/purples', async (req, res) => {
    try {
        const color = await db.color.findByPk(req.params.id)
        const newPurple = await color.createPurple({
            name: req.body.name,
            hex: req.body.hex,
            rgb: req.body.rgb,
            hsl: req.body.hsl,
            description: req.body.description
        })
        res.send(newPurple)
    } 
    catch (error) {
        console.log(error)
    }

})

module.exports = router;