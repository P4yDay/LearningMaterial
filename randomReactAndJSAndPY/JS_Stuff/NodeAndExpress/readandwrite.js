
// Read File
var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data){
   // write file
     fs.writeFile('writeMe.txt', data, (err) =>{});
});
// delete file
// fs.unlink('writeMe.txt', function(err){
//     if (err){
//          throw err;
//         }
//     console.log('File deleted');
// });