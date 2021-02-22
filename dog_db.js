const models = require('./models')

const makeDog = async () => {
    models.dog.create({
        name: 'Chewey',
        breed: 'Chihuahua',
        loud: true
    })
}

makeDog();