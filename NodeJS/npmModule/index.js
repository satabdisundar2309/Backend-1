// npm-Node Package Manager library, is used to add some predefined modules inside it to use in our node projects
// 1: chalk module for styling our terminal strings "npm i chalk"
// const chalk = require('chalk')
// console.log(chalk.blue("Hello duniya"));  //showing error, but should print in blue colour
// console.log(chalk.blue.underline("Hello duniya"));//showing error, but should print in blue colour underlined, visit thapa technical video number 13 comment section for solution in nodejs series

// 2: validator module for validating the forms "npm i validator"
const validator = require('validator')
const result = validator.isEmail("xyz@2309.567com");
console.log(result)

// if we notice, we have to run the same file again & again in our terminal in order to check the rsults after changing something in the code. but there is a npm module called as "nodemon" which will automatically detect the changes in the code and then run the same file for us in the terminal. "npm i nodemon". Not that necessary but interesting module. 

