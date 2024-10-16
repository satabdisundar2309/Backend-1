const fs = require('fs')

// // reading the file synchronously
// const data = fs.readFileSync('read.txt','utf-8')
// console.log(data)
// console.log('Hello guys')
// In the above case first the data will pe printed then Hello guys will be printed

// reading the file asynchronously
fs.readFile('read.txt','utf-8',(err, data)=>{
    console.log(err)
    console.log(data)
})
console.log('Hello Guys')
// In the above case node will execute another task which is queue if the current task is taking some time to get response