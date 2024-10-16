// Asynchronous fs core module in nodeJS
const fs = require("fs");
// fs.writeFile('read.txt', "Today is a awesome day", (err)=>{
//         console.log("File is created")
//         console.log(err)
// }) //When a function is passed as an argu,ent inside another function, then that function is called as a callback function. Here in asynchronous nodeJS we definitely have to pass this callback function that will tell us that wheather the file is created or there is an error in the creation process

// fs.appendFile("read.txt", " Welcome to this file", (err)=>{
//         console.log(err)
//         console.log("Data appended successfully...")
// })

fs.readFile('read.txt',"utf8", (err, data)=>{
    console.log(err)
    console.log(data)
    console.log('Data read successfully...')
})// Here 'data' is a compulsory arguement which will hold the data that is coming as response once the file is read. Here we don't need to store the returned data in a separate variable.