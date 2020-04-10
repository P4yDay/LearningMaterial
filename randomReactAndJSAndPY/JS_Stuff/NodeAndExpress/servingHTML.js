/* Pretty much the  same as pipes with one minor tweak
   Will need an html page create but the rest is copied from pipes.js    
*/ 

var http = require('http');
var fs = require('fs');


// putting the pipe in a server using the server code from createServer.js
var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    // change the content type to text/html
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Change the readstream to get the html file 
    var readStream = fs.createReadStream(__dirname + '/servingHTML.html');
    readStream.pipe(res);
});

server.listen(2542,'127.0.0.1');
console.log('Server is up! RHOST: 127.0.0.1, RPORT 2542');
