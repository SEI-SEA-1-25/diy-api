const models = require('./models')
const data = require('./description.json')

const makeFragrance = async () => {
    models.fragrance.create({
        brand: 'Chloé',
        parfume_name: 'Chloé Eau de Parfum',
        size: '2.5 oz',
        price: 132
    })
}
//makeFragrance()

const makeDescription = async () => {
    models.parfume_description.bulkCreate(data)
}
makeDescription();
