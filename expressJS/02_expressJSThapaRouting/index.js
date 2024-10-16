const express = require('express')
const app = express()


// creating different routes
app.get('/',(req,res)=>{
    res.send('Welcome to the home page...');
})
app.get('/about',(req,res)=>{
    res.send('Welcome to the about page...');
})
app.get('/contact',(req,res)=>{
    res.status(200).send('Welcome to the contact page...')//sending the status code 200 i.e. OK
    //express bydefault throws the status code as 200 if the request is successful, but if the request has some error then the status code will be set to 404
})
app.get('/temp',(req,res)=>{
    res.status(200).send('Welcome to the temp page...');
})
app.get('*',(req,res)=>{
    res.status(404).send('404 page not found...');
})

app.listen(8000)