import React from 'react'

 const Dapper = (props) => {    
    const { people } = props;
    // const list = dappers.map(dapp => {
    //     if (dapp.age > 20){
    //     return(
            // <div className="dapper" key= {dapp.id}>
            //     <div>Name: { dapp.name }</div>
            //     <div>Age: { dapp.age } </div> 
            //     <div>Hometown: { dapp.ht } </div>
            //     </div>
    //         ) 
    //     }
    //     else return null;
    //     })
    
// same output as above but refactor to a teneray operator
    const list = people.map(dapp =>{
      return  dapp.age > 20 ? (
        <div className="dapper" key= {dapp.id}>
            <div>Name: { dapp.name }</div>
            <div>Age: { dapp.age } </div> 
            <div>Hometown: { dapp.ht } </div>
            <button onClick={() => dapp.deletePerson(dapp.id)}>Delete Person</button>
      </div>
      ) : null 
    })
        return(
            <div className="dapper-list">
                { list }
            </div>
        )
    }

export default Dapper;