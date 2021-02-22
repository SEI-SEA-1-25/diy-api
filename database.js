const db = require('./models');
const models = require('./models')

const clubInformation = require('./soccerclub.json')

// const player1 = async () => {
//     clubInformation.foreach(c => models.club.create(c))
// }
// player1()


const playerCreate = async () => {
    models.club.bulkCreate(clubInformation)
}
playerCreate()