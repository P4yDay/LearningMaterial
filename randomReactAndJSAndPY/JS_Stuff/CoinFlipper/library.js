const coinFlip = require('./library.js');



async function flipIt(){
  try{
    let result = await coinFlip();
    console.log(`it's ${result}`);
  } 
  catch (error){
    console.log(`it's tail`);
  }
}

flipIt();