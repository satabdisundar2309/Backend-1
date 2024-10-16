// Events Module
// Node.js has a built-in module called "Events" where you can create , fire and listen for your Events.

// Here we dont use just require to import the "events" module, rather we create a class and then create an instance of it like below:
// creating event emitter instance:
const EventEmitter = require('events');
const event = new EventEmitter();

// Example-1: Registering for the event to be fired one time
// llistening the below event
event.on("sayMyName",()=>{
    console.log("First callback here")
});//First callback here will be shown in the console
// Example-2: Registering more callbacks for the same named event
event.on("sayMyName",()=>{
    console.log("Second callback here")
});//Second callback here will be shown in the console
event.on("sayMyName",()=>{
    console.log("Third callback here")
});//Third callback here will be shown in the console


// triggering the event
event.emit("sayMyName");

// As we can see in the above code, we first listened the event before triggering it. Its because in Node.js its done like that, or else there will be no response to the triggered event. That means the below code wont work:
// event.emit("sayMyName");
// event.on("sayMyName",()=>{
//     console.log("First callback here")
// });//This wont print in the console....

// The concept is simple: Emitter objects emit named events (in this case "sayMyName") that cause previously registered listeners to be called. so, an emitter object has basically two main features:
            // 1. Emitting name Events
            // 2. Registering and unregistering events
// In node js, we can call multiple function using one event. line number 12-21; 


// Example-3: Registering the event with callback parameters

event.on("checkPage", (statusCode, message)=>{
    console.log(`Status code is ${statusCode} and the page is ${message}`);
}); //Status code is 200 and the page is OK will be shown in the console.
event.emit("checkPage", 200, "OK");



