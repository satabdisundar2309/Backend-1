
// CRUD operation in nodeJS using fs module.
// 1: Creating a folder named Satabdi
// 2: Create a file in it and name it as BindOptions.txt and add data into it
// 3: Add more data into the file at the at end of the existing data.
// 4: Readt the data without gwtting thw buffer data at first.
// 5: REname the file name to myBio.txt
// 6: Now delete both file and the folder

const fs = require('fs')
//1: folder creation
// fs.mkdirSync('Satabdi')

// 2: creating new file
// fs.writeFileSync('Satabdi/bio.txt', "My name is Satabdisundar Behera");

// 3: adding more data
// fs.appendFileSync('Satabdi/bio.txt', " I am a web developer")

// 4: Reading data without getting buffer data
//  const data = fs.readFileSync('Satabdi/bio.txt', "utf8")
//  console.log(data)

// 5: REnaming the file
// fs.renameSync('Satabdi/bio.txt', 'Satabdi/myBio.txt')

// 6: Delete the file and then the folder
// fs.unlinkSync('Satabdi/myBio.txt')
// fs.rmdirSync('Satabdi')
