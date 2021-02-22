const models = require('./models');


const makeNewDog = () => {
    models.dog.create({
        name: 'Affenpinscher',
        personality: 'Confident, fearless' ,
        ranking: 148,
        group: 'Toy' ,
        size: 10
    })
}
//makeNewDog()