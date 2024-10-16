// os Module i.e. Operating system module of nodejs
const os = require('os')

// arch() function
console.log(os.arch());//returns the architechture of your OS

// hostname() function
console.log(os.hostname());//returns the host name of your pc

// platform() function
console.log(os.platform());//returns the platform name like win32 etc...

// type() function
console.log(os.type());//returns the type of OS yu are using...

// freemem() function
const freeMemory = os.freemem();
console.log(`The amount of free RAM memory left in this device is ${freeMemory} bytes`);//returns the amount of RAM memeory left in your device in bytes
console.log(`The amount of free memory left in this device is ${freeMemory/1024/1024/1024} GB`);

// totalmem() function
const totalMemory = os.totalmem();
console.log(`The amount of RAM in this device is ${totalMemory} bytes`);//returns the total amount of RAM memeoryin your device in bytes
console.log(`The amount of RAM in this device is ${totalMemory/1024/1024/1024} GB`);