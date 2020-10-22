const express = require('express')
const app = express()
const port = 3004
const date = new Date();
let  time = date.getHours() + ":" + date.getSeconds();


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

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))