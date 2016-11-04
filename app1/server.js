var http = require('http');
var server = http.createServer(function (request, response) {
       response.writeHead(200, {"Content-Type": "text/plain"});   
       response.end("Ermahgawd, erts a " + process.env.CONTAINER + "! And it is alive!\n"); 
}); 
server.listen(3000); 
console.log("Server running at http://127.0.0.1:3000/");
