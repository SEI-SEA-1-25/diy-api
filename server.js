/* CREATING ROUTES */

const { Router } = require('express')
const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')

const rowdyRes = rowdy.begin(app)

const models = require('./models')



//handler. because there is no conclusion on this line, it moves onto the next. this is an example of middleware. This line needs to be here before the others. Refer to recording for good information
app.use(express.urlencoded({ extended: false}))     

// this allows it to GET
app.get('/', (req, res) => {
  res.send('hello from root!')
})

app.get('/countries', async (req, res) => {
  models.country.findAll().then((countries) => {
  res.json({ countries })
  })
})


app.post('/countries', (req,res) => {
  models.country.create({
    name: req.body.name,
    founded: req.body.founded,
    population: req.body.population
  })
})

// app.post('/countries', (res, req) => {
//   models.country.create({
//     name: req.body.name,
//   )}.then((continent) => {
//     res.json({continent})
//   })
// })
 
const country = await continent.createCountry({
  name: req.body.name,
  founded: req.body.founded,
  population: req.body.population
})

router.post('/:id/countries', async (req, res) => {
  const continent = models.continent.findByPk(req.params.id)
  const countries = await continent.getCountries()

  res.json({ countries })
})






//compounds

// To get postman working
const PORT = process.env.PORT || 3000
app.listen(3000, () => {
  console.log('server started')
  rowdyRes.print()
})

