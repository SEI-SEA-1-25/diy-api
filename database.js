const models = require('./models')

const player1 = async () => {
    models.player.create({
        name: "Virgil van Dijk",
        age: 29,
        nationality: "Netherlands",
        club: "Liverpool FC"
    })
}
// player1()