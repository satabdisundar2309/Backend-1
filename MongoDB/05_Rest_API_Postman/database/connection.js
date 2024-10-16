const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/studentsDB").then(()=>{
    console.log("Connection is estlabished with database")
}).catch((err)=>{
    console.log("Error occured while connecting with the databse")
})