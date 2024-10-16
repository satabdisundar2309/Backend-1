// importing data from operator.js module

// importing add function
// const add = require("./operator")
// console.log(add(5,9))

// importing name variable
// const name = require("./operator")
// console.log(name)

// importing multiple functions and variables at a time
// const xyz = require("./operator")
// console.log(xyz)
// console.log(xyz.add(5,7))
// console.log(xyz.sub(54,12))
// console.log(xyz.name)

// doing the above task directly using object destructuring
const {add, sub, name}= require("./operator")
console.log(add(5,7))
console.log(sub(54,12))
console.log(name)
