const models = require('./models')

const makePlayer = async ()=> {

    models.player.create({
        name: ' Raheem Sterling',
        position: 'RW',
        number: 7,
        nationality: "England"
    })

}
// makePlayer();


