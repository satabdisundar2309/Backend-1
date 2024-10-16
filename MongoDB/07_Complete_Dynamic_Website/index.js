const express = require('express')
const app = express();
const port = process.env.PORT || 8000
require('./db/dbConnection')
const path = require('path')

const staticFolderPath = path.join(__dirname,"/public")
// how to use bootstrap
app.use('/css', express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "/node_modules/jquery/dist")))
app.use(express.static(staticFolderPath))


app.set("view engine", "hbs")
app.get('/',(req,res)=>{
    res.render("index");
})

app.listen(port, ()=>{
    console.log(`App running in port number ${port}`)
})