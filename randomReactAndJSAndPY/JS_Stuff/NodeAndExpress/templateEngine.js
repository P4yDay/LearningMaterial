var express = require('express');
var bodyParser = require('body-parser');

//setup express app
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});



// using ejs as our view engine 
// not need to create a views folder
app.set('view engine', 'ejs');

// adding middleware you have to use the use() method
// app.use(/path, function(req,res, next){
// next is a param that just paths the code to the next get or middleware
// next(); this is needed inside the end of the function to continue
// })
// express also comes with some middleware called express.static('path')
// that has to be inside the use param as the function


// /* BASIC EXPRESS ROUTE */
// app.get('/contact', function(req,res){
// // using sendFile to send a html file
//     res.sendfile(__dirname + '/servingHTML.html');
// });



app.get('/', function(req,res){
    res.render('index');
});

app.get('/contact', function(req,res){
    // log any query sting
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

// handling POST request
app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

// :id is called a route param
app.get('/profile/:id', function(req, res){
    // using the method render to view the ejs template
    // does not need the dir path ejs knows to look into the views folder
    // to make it more dynamic add a second param to render
    // set the 2nd param a object and make the value req.params.(value in the get)
    var data = {age: 23, job: 'Software Developer', hobbies: ['cooking', 'playing games', 'working out']}
    res.render('profile', {person: req.params.id, data: data});
});

app.listen(3000);




/* HTTP methods
    GET: app.get('route', func)
    POST: app.post('route, func)
    DELETE: app.delete('route, func)
*/
