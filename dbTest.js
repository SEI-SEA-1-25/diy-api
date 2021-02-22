const models = require('./models')

const makeWarrior = async() =>{
    models.warrior.create({
        player_name: 'stephen curry',
        previous_team: 'none',
        salary: 40230000,
        height:6
    })
}

makeWarrior()