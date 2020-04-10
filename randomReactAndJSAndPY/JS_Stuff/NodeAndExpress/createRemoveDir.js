var fs = require('fs');


// create directory
// used sync to make it sync
// if not you will need a callback function


//sync
//fs.mkdir('stuff');

//async
fs.mkdir('stuff', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, err => {});
    })
})

//remove directory
// only can delete if dir is empty
//fs.rmdirSync('stuff');