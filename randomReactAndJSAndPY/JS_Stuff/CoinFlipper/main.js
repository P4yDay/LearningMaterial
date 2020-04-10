//This function returns true 50% of the time.
let randomSuccess = () => {
    let num = Math.random();
    if (num < .5 ){
      return true;
    } else {
      return false;
    }
   };
   
   //This function returns a promise that resolves half of the time and rejects half of the time
   let coinFlip = () => {
    return new Promise((resolve, reject) => {
      console.log('Fingers crossed... Flipping a coin');
      setTimeout(()=>{
        let success = randomSuccess();
        if(success){
          resolve('heads');
        } else {
          reject('tails');
        }
      }, 9000);
    })
   };
   
   module.exports = coinFlip;