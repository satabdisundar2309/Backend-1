//! PARTIALS in expressJS are the common components like header, navigation bar and footers that we use in different pages

const express = require('express')
const app = express();
const path = require('path')
const viewsPath = path.join(__dirname,'/templates/views') //setting the path for views folder
const partialssPath = path.join(__dirname,'/templates/partials') //setting the path for partials folder

app.set('views',viewsPath);
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'/public')))
// the above line will make sure that we can use our static css file in our hbs files
// !In order to use the partials in expressJs we have to require the hbs module first
const hbs = require('hbs')
hbs.registerPartials(partialssPath) //this line is mandatory

app.get('/',(req, res)=>{
res.render('index',{
    name: "Satabdisundar"
})
})

app.get('/about',(req, res)=>{
     const data = {
        name: 'Satabdisundar',
        age: 22
    }
res.render('about',{data});
})

app.get('/about/*',(req, res)=>{

res.send('about bhitare nhi kichhi');
})

app.get('*',(req, res)=>{

    res.send('eithi nhi kichhi');
    })

app.listen(5001)