const express = require('express')
const app = express();
const path = require('path')

// !modifying the name of views ditrectory
// first remane the views folder, say 'templates'
// now get the path of the templates folder
const templatesPath = path.join(__dirname,'templates')

app.set('views',templatesPath); //thsi line helps the template engine to recognise that views folder is now templates folder

//?set the view engine
app.set('view engine','hbs');

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

app.listen(8000)