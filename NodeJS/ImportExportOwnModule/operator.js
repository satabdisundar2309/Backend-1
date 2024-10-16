// CREATION OF YOUR OWN MODULE
// creating your own module means creating a js file where we will export some of our own defined functions and variables in order to use them in another js file

const add = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}

const name = "Satabdisundar";

// exporting the add() function
// module.exports = add;

// exporting name variable
// module.exports = name;

// EXPORTING multiple functions and variables
// module.exports.add=add; //here the 'add' on the left side should not be same to the 'add' on the right side, as the 'add' on the right side is the actual function name and the 'add' on the left side is the name that represents the 'add' function. now in order to access the original add function we have to use the name in the left side in the file in which we are calling the original add function. 
// module.exports.sub=sub;
// module.exports.name=name;
// the above 3 lines will export all the functions and variables in the form of an object and in key value pairs
// instead of exporting each item individually, we can use the below syntax to export all of them at once
module.exports={add, sub, name}
