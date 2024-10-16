const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Hello to the home page...')
})
app.get('/about',(req,res)=>{
    res.send('Hello to the about page...')
})
app.listen(8000)

// The callback function has two parameters, request(req), response(res).
// The request object represents the https request and has the properties for the request query string, parameters, body, https headers, etc...
// Similarly the response object represents the http response that the express app sends when it recieves an hhtp request. 