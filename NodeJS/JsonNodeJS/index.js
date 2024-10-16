// JSON stands for javascript object notation. It is a very lightweight format to store and transport data. Json is often used when data is sent from  a server to a web page.

const bioData= {
    name : "Satabdi",
    age : 22,
    email : "satabdibehera2309@gmail.com",
};

// console.log(bioData.email)
// console.log(bioData.name)

// // If we want to convert an object into a JSON then
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// console.log(jsonData.email);//returns undefined
// // we cannot directly access the data of a JSON file like above, it will return undefined. In order to access the properties of a JSON data, we need to convert it into an object like below
// const objData = JSON.parse(jsonData);
// console.log(objData)
// console.log(objData.email);

// Tasks to perform
// 1: Convert the above object into JSON
// 2: Add the data to another File
// 3: Read the data from that File
// 4: Again covert the data into an object
// 5: show the data in console.

const jsonData = JSON.stringify(bioData);
const fs = require('fs');

// adding the data to a file
// fs.writeFile('json1.json', jsonData, (err)=>{
//     console.log("File Created")
// });

// reading the data from that file
fs.readFile('json1.json', "utf8", (err, data)=>{
    console.log( data);
    // converting the data to object form
    const originalData = JSON.parse(data)
    console.log(originalData)
});

