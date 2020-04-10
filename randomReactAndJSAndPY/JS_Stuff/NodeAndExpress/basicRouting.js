var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    // routing code

    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/servingHTML.html').pipe(res)
    }
    else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }// route to some basic json
    else if(req.url === '/api/scientist'){
        var scientist = [{name: 'Bill Nye', age:64},{name:'Neil Tyson', age: 61}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(scientist));
} // if all else fail give them a 404
 else{
     res.writeHead(404, {'Content-Type': 'text/html'});
     fs.createReadStream(__dirname + '/404.html').pipe(res);
}
});

server.listen(6464, '127.0.0.1');
console.log('Yurrr now listening on 127.0.0.1:6464');