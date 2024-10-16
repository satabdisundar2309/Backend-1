// Node.js Streams

// Streaming means listening to music or watching videos in real time, instead of downloading a file to your computer and watching it later.
// Streams are objects that let you read data from a source or write data to a destination in constinous fashion. In Node.js there are 4 types of streams:
        // Readable- Stream which is used for read operation
        // Writable- Stream which is used for write operation
        // Duplex- Stream which can be used for read and write operation
        // Transform- A type of duplex stream where the output is computed based on the input.

// Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are-
        // data- This event is fired when there is data is availble to read.
        // end- This event is fired when there is no more data to read.
        // error- This event is fired when there is an error receiving or writing data.
        // finish- This event is fired when all the data has been flushed to underlying system.
        
const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request',(request, response)=>{
    // fs.readFile('input.txt','utf8', (err, data)=>{
    //     if (err) {
    //         return console.log(err)
    //     }
    //     response.end(data.toString());
    // });

    // The above commented codes are not the streaming way to read data from a file, the streaming way is written below:

    // 2nd way
    // create a readable stream
    // Reading from a stream
    // handle stream events --> data, end, and error

    // const rstream = fs.createReadStream('input.txt');
    // rstream.on('data', (chunckData)=>{
    //     response.write(chunckData); //it writes the data in the browsers response in chunks that is one by one
    // });
    // rstream.on('end',()=>{
    //     response.end();
    // })
    // rstream.on('error', (err)=>{
    //     console.log(err)
    //     response.end("File not found");
    // })


    // 3rd way using pipe() method - using just one line of code as the alternative of above written codes
    // pipe() method is used to take a readable stream and connect it to a writable stream.

    const rstream = fs.createReadStream('input.txt');//it reads tdata from the given file
    rstream.pipe(response); //it will write the read data from input.txt in the respose of the server that is in browser window in real time not one by one.
});

server.listen(8000,"127.0.0.1", ()=>{
    console.log('Listening to port number 8000');
});
