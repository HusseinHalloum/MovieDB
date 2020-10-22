const express = require('express')
const app = express()
const port = 3000
const date = new Date();
let  time = date.getHours() + ":" + date.getSeconds();

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]


app.get('/', (req, res) => res.send('ok'))

app.get('/test', (req, res) => res.send({status:200, message:"ok"}))

app.get('/time', (req, res) => res.send({status:200, message:time}))

app.get('/hello/:id' , (req ,res) => {
    res.status(200).send("hello, " + req.params.id)
})

app.get('/hello' , (req ,res) => {
    res.status(200).send("hello")
})

app.get('/search', (req, res) => {
    const {s} = req.query;
    if(!s){
        res.send({status:500, error:true, message:"you have to provide a search"})
    }
    else {
         res.send({status:200, message:"ok", data:s})
    }
})

// Step - 5 - 


app.get('/movies/create', (req, res) =>{
    res.send('create')
})
app.get('/movies/read', (req, res) =>{
    res.send({status:200, data :movies})
})
app.get('/movies/update', (req, res) =>{
    res.send('update')
})
app.get('/movies/delete', (req, res) =>{
    res.send('delete')
})

app.get('/movies/read/by-date', (req, res) =>{
    res.send({status:200, data :movies.sort((a, b) => {
        if (a.year !== b.year)
         return a.year - b.year;
    })})
})

app.get('/movies/read/by-rating', (req, res) =>{
    res.send({status:200, data : movies.sort((a, b) => {
        return b.rating - a.rating;
   })})
})

app.get('/movies/read/by-title', (req, res) =>{
    res.send({status:200, data : movies.sort((a, b) => {
        a.title !== b.title ? a.title < b.title ? -1 : 1 : 0})
    })
})

app.get('/movies/read/id/:id',(req, res) => {
    const id = req.params.id;
    if(!movies[id-1]){
        res.send({ status:404, error:true, message:'the movie '+(id)+' does not exist'})
    }
    else{
    res.send({status: 200, data : (movies[(id-1)])})
    }
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))