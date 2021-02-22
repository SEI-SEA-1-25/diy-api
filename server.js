//required modules
const express =require('express')

//variables

const app =express();
const PORT = 3000;

//Routes
app.get('/', (req,res) => {
    res.send('hello world from express...hi')
})



    app.listen(PORT, () => {
        console.log(`server is listening on port $(PORT)`)
    })

