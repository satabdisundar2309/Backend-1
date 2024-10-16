const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

// using public folder to use static files
const publicPath = path.join(__dirname,'public')
app.use(express.static(publicPath))

// setting view engine
app.set('view engine', 'hbs');

// setting partials
hbs.registerPartials(`${__dirname}/partials`)

// routes
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404',{
        error:'Kuchh nhi hai yahan, home page pe jao'
    });
})

app.listen(5000)