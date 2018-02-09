import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state = {
      persons: [
        {id : 'ama1', name: "Max", age: 28},
        {id : 'sdf2', name: "Manu", age: 29},
        {id : 'asd4', name: "Stephanie", age: 26}
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

    // deletePersonHandler = (deletedIndex) => {
    //   const personGone = this.state.persons.slice(); 
    //   /* moze i bez slice, ali se onda mutira, pa je dobra praksa
    //   da ide slice pre splice.
    //   splice kopira sadrzaj, a splice izbacuje "(od indexa, komada n)*/
    //   /*Modernija sintakesa je: */ 
    //   //const personGone = [...this.state.persons]
    //   personGone.splice(deletedIndex, 1);
    //   this.setState({
    //     persons : personGone
    //   })

    // }

    deletePersonHandler = (personIndex) => {
      const personGone = this.state.persons.slice();
      personGone.splice(personIndex, 1);
        this.setState ({
          persons : personGone
        })

    }

    /*
      Samo po Index-u sa mutiranjem
    nameChangedHandler(event, personIndex) {
      this.state.persons[personIndex].name = event.target.value;
           this.setState ({
             name: event.target.value
           })
         }
          */
     

    // nameChangedHandler(event, id) {
    //   const personIndex = this.state.persons.findIndex( p=> {
    //     return p.id === id;
    //   })
      
    
         //po Id nemutirano, najispravniji nacin
    nameChangedHandler(event, id) {
          const personIndex = this.state.persons.findIndex( p=> {
            return p.id === id;
          })
      

               /** po index-u nemutirano */
        //nameChangedHandler(event, personIndex) {


     
      const person = {...this.state.persons[personIndex] }
        
      person.name = event.target.value

      const persons = [...this.state.persons]
      persons[personIndex] = person;

      this.setState ({
        persons : persons
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

      {/* {this.state.persons.map((anyName, indexForDel) => {
        return (
        <Person 
        killHim = {() => this.deletePersonHandler(indexForDel)}
       // forDelClick = {() => this.deletePersonHandler(indexForDel)}
       // click = { () => this.deletePersonHandler(index)}
        name = {anyName.name}
        age = {anyName.age}
    
        />

        )}
      )
    } */}

    {this.state.persons.map((person, indexOf) =>{
      return(
        <Person
        name = {person.name}
        age = {person.age}
        killHim = {()=> this.deletePersonHandler(indexOf)}
        key = {person.id}
       // changed = {this.nameChangedHandler.bind(this, event, indexOf)}
        changed = { (event) => this.nameChangedHandler(event, person.id)}
       // changed = { (event) => this.nameChangedHandler(event, indexOf)}
        />
      )}
    
    
    
    )}


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
