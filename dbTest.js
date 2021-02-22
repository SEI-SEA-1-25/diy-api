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




const makeChampionship =async() => {
    models.championship.create({
        warriorId: 1946,
        year_won: 2018,
        most_mvp: 'stephen Curry'
    })
}
makeChampionship()

