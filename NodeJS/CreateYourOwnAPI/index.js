// http module to create web server in node js.

const http = require('http')
const fs = require('fs');
const { json } = require('stream/consumers');

const server = http.createServer((request, response)=>{
    const data = fs.readFileSync(`${__dirname}/userAPI/ownAPI.json`, "utf8")
    const objData = JSON.parse(data)
        // console.log(request.url)
        if(request.url == '/'){
            response.end('Hello from the other side Home')
        }
        else if(request.url == '/about'){
            response.end('Hello from the other side About')
        }
        else if(request.url == '/contact'){
            response.end('Hello from the other side Contact')
        }
        else if(request.url == '/userAPI'){
            response.writeHead(200, {'Content-type': 'application/json'})
            response.end(objData[0].name);
        }
        else{
            response.writeHead(404, {'Content-type': 'text/html'})//This is an http header which sets the status code of this response to 404.
            response.end('<h1>404 Error occured</h1>') //response is displyaed as HTML here
        }
        
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to the port number 8000')
});

// The http.createServer() method includes request and response parameters which is supplied by node js.
// The request object can be used to get information about the current http request e.g. url, request header, and data.
// The response object can be used to send a response for a current http request.
// If the response from the http server is supposed to be displayed as html, you should include an http header with the corect content type. 