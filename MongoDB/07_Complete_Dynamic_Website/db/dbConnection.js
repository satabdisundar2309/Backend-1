const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1/DynamicWebsiteData").then(()=>{
    console.log("DB Connection is successful")
}).catch((err)=>{
    console.log("Error while connecting db"+ err)
})