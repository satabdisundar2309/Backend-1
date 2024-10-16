const express = require("express");
const app = express();
const path = require('path')

const staticPathName = path.join(__dirname,'public');

//? using express.static() middleware to serve static pages, its a built in middle ware
// app.use(express.static(staticPathName))
//! now you have to change the urls in the browser to contact.html, about.html and the pages will be rendered, by default the home route will be index.html as the browser execution starts from there only. Here, there will be the extensions of the static files in the routes or the urls, hence we have a better method called res.sendFile().

//? how to remove extensions of the static files from the requested url
app.get("/",(req,res)=>{
    res.sendFile(`${staticPathName}/index.html`);
})
app.get("/about",(req,res)=>{
    res.sendFile(`${staticPathName}/about.html`);
})
app.get("/contact",(req,res)=>{
    res.sendFile(`${staticPathName}/contact.html`);
})

//! In the above html pages the inline css works but not the external css files, it show error, but if we comment out above code and use only the express.static() middleware, it works perfectly
app.listen(8000);
