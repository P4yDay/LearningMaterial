import React, { Component } from 'react';
import Dapper from './dapper';
import AddPerson from './AddPerson';


class App extends Component {
state = {
  people: [
    {name: 'Chauncey', age: 23, ht: 'HHI', id: 1 },
    {name: 'Tim', age: 17, ht:'Blud', id: 2 },
    {name: 'John', age: 19, ht: 'ASC', id: 3 }
  ]
}

addAPerson =(person) => {
    //Take person and add to state
  //console.log(person);
  
  //give a random id
  person.id = Math.random();
  //add it to state
  //spread operator
  let people = [...this.state.people, person]

  this.setState({
    people: people
  })
}

render(){
  return (
    <div className="App">
      <h1>
        My First React App!
      </h1>
      <p> Welcome :) </p>
      <Dapper people={this.state.people} />
      <AddPerson person={ this.addAPerson }/>
    </div>
  );
}
}

export default App;