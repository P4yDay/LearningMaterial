var express = require('express');

//setup express app
var app = express();

/* BASIC EXPRESS ROUTE */

app.get('/', function(req, res){
    // using sendFile to send a html file
    res.sendfile(__dirname + '/servingHTML.html');
});

app.get('/contact', function(req,res){
    res.send('this is the contact page');
});

// :id is called a route param
app.get('/profile/:id', function(req, res){
    res.send('You reqquested to see a profile with the id of ' + req.params.id)
});

app.listen(3000);




/* HTTP methods
    GET: app.get('route', func)
    POST: app.post('route, func)
    DELETE: app.delete('route, func)
*/
