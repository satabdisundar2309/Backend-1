// CRUD operation in nodeJS using fs module asynchronously.
// 1: Creating a folder named Satabdi
// 2: Create a file in it and name it as BindOptions.txt and add data into it
// 3: Add more data into the file at the at end of the existing data.
// 4: Readt the data without gwtting thw buffer data at first.
// 5: REname the file name to myBio.txt
// 6: Now delete both file and the folder

const fs = require('fs');
// folder creation
// fs.mkdir('Satabdi', (err)=>{
//     console.log(err)
//     console.log('Folder Satabdi is been created:)')
// })

// file creation
// fs.writeFile('Satabdi/bio.txt', "Welcome to this file :)", (err)=>{
//     console.log(err)
//     console.log("File bio.txt is created...")
// })

// appending to existing data
// fs.appendFile('Satabdi/bio.txt'," \n Tell me how are you?", (err)=>{
//     console.log(err)
//     console.log('Data appended successfully')
// })

// reading data from the file
// fs.readFile('Satabdi/bio.txt', 'utf-8', (err, data)=>{
//     console.log('Data reading...')
//     console.log(data)
//     console.log(err)
// })
// console.log('Data reading taking time...')

// renaming the file
// fs.rename('Satabdi/bio.txt', 'Satabdi/myBio.txt',(err)=>{
//     console.log(err)
//     console.log('File renamed')
// })

// // deleting the file
// fs.unlink('Satabdi/myBio.txt', (err)=>{
//     console.log(err)
//     console.log('File deleted')
// })

// deleting the folder
fs.rmdir('Satabdi', (err)=>{
    console.log(err)
    console.log('Folder has been deleted')
})
console.log("Challenege Completed ;)   ")