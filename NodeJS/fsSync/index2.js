// nodeJS CORE MODULES
// Consider the core modules of the nodeJS as javascript libraries. A set of functions you want to include in your application.
// Node js has a set of built in mnodeules which we can use without any further installation.
// Lets understand it:
const fs = require("fs"); //fs module stands for file system

// CREATION of a file and WRITING into it
// fs.writeFileSync('read.txt', "Welcome to my file"); //creates the file and writes inside it if file is not existing already
// fs.writeFileSync('read.txt', "Satabdisundar Behera");//overrides the existing data and writes the given data
// fs.appendFileSync('read.txt', 'Welcome to my file');//appends to existing data

// READING the data from a file
// const buf_data = fs.readFileSync('read.txt')
// console.log(buf_data)
// // NodeJS includes an additional data type called Buffer (Not available in browsers javascript). Buffer is mainly used to store binary data while reading from afile or receiving packets over the network.
// // The output wil be like <Buffer 53 61 74 61 62 64 69 73 75 6e 64 61 72 20 42 65 68 65 72 61 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 66 69 6c 65>
// // Now converting the binary data to string like below and printing it
// const org_data = buf_data.toString();
// console.log(org_data);

// to RENAME a file
fs.renameSync("read.txt", "readWrite.txt");
