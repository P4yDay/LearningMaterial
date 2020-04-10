var http = require('http');
var fs = require('fs');


// putting the pipe in a server using the server code from createServer.js
var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // adding the pipeline 
    var readStream = fs.createReadStream(__dirname + '/readme.txt');
    readStream.pipe(res);
});

server.listen(2542,'127.0.0.1');
console.log('Server is up! RHOST: 127.0.0.1, RPORT 2542');
