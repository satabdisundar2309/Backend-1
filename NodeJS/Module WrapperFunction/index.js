// Module Wrapper Function
const name = 'Satabdisundar'
console.log(name)

// NOTE:::: In nodeJS every individual js file is called as module. And the variables and the functions that you create in side thbose modules are generally have private scope i.e. we cannot use them in another file or module without exporting or importing them.

// In case of node when we wrote the above two lines if codes, nodeJS wrapped it inside a module wrapper function like below
// (function(exports, require, module, __filename, __dirname){
//     const name = 'Satabdisundar'
//     console.log(name)
// })
// here the first parenthesis is called as grouping operator which contains an anonymous function that takes 5 parameters and wraps the actual lines of code that we write inside it. This is how the behind the scenes of nodeJS looks looks like


// Concepts related to javascript
// IIFE- Watch thapa technoical video for more

(function(){
    var a = "Satabdisundar"
    console.log(a)
})();