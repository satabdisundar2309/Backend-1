const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1/ttchannel"; //if there is no such database then it will create a database of this name
mongoose
  .connect(url) //this returns a promise
  .then(() => {
    console.log("connection estlabished");
  })
  .catch(() => {
    console.log("Error occured");
  });

// ? SCHEMA
const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cType: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
})

// ? MODEL - connecting with existing collection or creating new collection
const playListModel = mongoose.model('playlist', playListSchema)
// const playListModel = new mongoose.model('playlist', playListSchema) //it works same as above

const insertDoc = async ()=>{
try {
// ? insert one document
// const playList = new playListModel({
//     name: "javascript",
//     cType: "frontend",
//     videos:19,
//     author: "satabdisundar behera",
//     active: true,
// //we need not to write the date field as it has been assigned a default value
// })
// const result = await playList.save(); //it returns a promise
// console.log(result)

// ? insert multiple documents at once
const htmlPlaylist = new playListModel({
    name: "html",
    cType: "frontend",
    videos:10,
    author: "satabdisundar behera",
    active: false,
})
const cssPlaylist = new playListModel({
    name: "css",
    cType: "frontend",
    videos:19,
    author: "satabdisundar behera",
    active: false,
})
const tailwindPlaylist = new playListModel({
    name: "tailwind",
    cType: "frontend",
    videos:3,
    author: "satabdisundar behera",
    active: false,
})
const sqlPlaylist = new playListModel({
    name: "sql",
    cType: "database",
    videos:39,
    author: "satabdisundar behera",
    active: false,
})
const result = await playListModel.insertMany([htmlPlaylist,cssPlaylist,tailwindPlaylist,sqlPlaylist]); //it returns a promise
console.log(result)
} catch (error) {
    console.log(error)
}
}

// insertDoc();

// ? READING documents
const readDoc = async ()=>{
    try{
        const data = await playListModel.find({cType:"frontend"}).limit(3);
        console.log(data);
    }
    catch(err){
        console.log("Error occured while reading from database");
    }
}

// readDoc();

// ? UPDATING documents
const updateDoc = async ()=>{
    try{
        const data = await playListModel.updateOne({name:"css"}, {$set:{videos:29}});
        console.log(data);
    }
    catch(err){
        console.log("Error occured while updating from database");
    }
}

// updateDoc()

// ? DELETE documents
const deleteDoc = async ()=>{
    try{
        const data = await playListModel.deleteOne({name:"sql"});
        console.log(data);
    }
    catch(err){
        console.log("Error occured while deleting from database");
    }
}

deleteDoc()