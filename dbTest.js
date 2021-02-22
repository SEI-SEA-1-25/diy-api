const models = require('./models')
const data = require('./purples.json')

const makePurples = async () => {
    models.purple.bulkCreate(data)
}

makePurples();