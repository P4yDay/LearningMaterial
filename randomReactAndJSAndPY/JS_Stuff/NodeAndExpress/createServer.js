var http = require('http');

var server = http.createServer(function(reqest, response){
    console.log('request was made: ' + reqest.url)
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hey everyone!');
});

server.listen(3000, '127.0.0.1');
console.log('Listening on 127.0.0.1 on port 3000')

