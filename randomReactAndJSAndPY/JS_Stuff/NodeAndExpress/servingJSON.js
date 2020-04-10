/* 
    Same as with the Serving HTML except we change content type to application/json
    note we will need to bring back res.end and place our 'for the json' code into it
*/

var http = require('http');
var fs = require('fs');

// putting the pipe in a server using the server code from createServer.js
var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    // for the json   
    var myObj = {
        name: 'Bill Nye',
        job : 'Science Guy',
        age : 64
    };
    // need to serialize/strungify myObj in order for res.end() to work
    res.end(JSON.stringify(myObj));
});

server.listen(2542,'127.0.0.1');
console.log('Server is up! RHOST: 127.0.0.1, RPORT 2542');
