import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state = {
      persons: [
        {id : 'ama1', name: "Max", age: 28},
        {id : 'ama1', name: "Manu", age: 29},
        {id : 'ama1', name: "Stephanie", age: 26}
      ],
      otherState : "some other value",
      showPersons: false
    }

  // deletePersonHandler  (personIndex) {
  //   const persons = this.state.persons;
  //   persons.splice(personIndex, 1);
  //   this.setState({
  //     persons :persons
  //   })
  // } 

  // deletePersonHandler  = (indexForDel) => {
  //   this.state.persons.splice(indexForDel, 1);
  //   this.setState ({
  //     persons : this.state.persons
  //   })
  // }

    deletePersonHandler = (deletedIndex) => {
      const personGone = this.state.persons.slice(); 
      /* moze i bez slice, ali se onda mutira, pa je dobra praksa
      da ide slice pre splice.
      splice kopira sadrzaj, a splice izbacuje "(od indexa, komada n)*/
      /*Modernija sintakesa je: */ 
      //const personGone = [...this.state.persons]
      personGone.splice(deletedIndex, 1);
      this.setState({
        persons : personGone
      })

    }
     

    nameChangedHandler(event) {
      this.setState ({
        persons: [
          {name: "Maximimi", age: 33},
          {name: event.target.value, age: 29},
          {name: "Stephanie", age: 19}
        ]       
      })
    } 

    togglePersonsHandler = () => {
        this.setState({
          showPersons: !this.state.showPersons
        })
      }
 

  render() {
    const style = {
      backgroundColor: 'grey',
      font: 'inherit',
      borderColor: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let visible = null;

    if( this.state.showPersons ) {

  
      visible = (
    <div>

      {this.state.persons.map((person, indexForDel) => {
        return (
        <Person 
        killHim = {() => this.deletePersonHandler(indexForDel)}
       // forDelClick = {() => this.deletePersonHandler(indexForDel)}
       // click = { () => this.deletePersonHandler(index)}
        name = {person.name}
        age = {person.age}
        key = {person.id}
        />

        )}
      )
    }


    </div> 
      )
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style = {style} onClick = {this.togglePersonsHandler} >Switch Name</button>

        {visible}
      
          
      </div>
    );
  }
}

export default App;
