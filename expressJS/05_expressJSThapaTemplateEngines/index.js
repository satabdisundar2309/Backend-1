const express = require('express')
const app = express();
const path = require('path')
// here we will be using Handlebars view Engine called hbs
// hbs is basically a template engine used to render the dynamic pages...
// like hbs, there are other view engines like pug,ejs and etc...
// ! creating a "views" folder inside the root folder ("05_expressJSThapaTemplateEngines" in this case) is a must in using the template engine

//?set the view engine
app.set('view engine','hbs');

app.get('/',(req, res)=>{
    // const data = {
    //     name: 'Satabdisundar',
    //     age: 22
    // }
    // res.render('index', data)
// !  The above syntax of accessing the name wont work, but the below syntax will work
res.render('index',{
    name: "Satabdisundar"
})
})

app.listen(8000)