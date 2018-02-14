import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'


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
      backgroundColor: 'green',
      color: "white",
      font: 'inherit',
      borderColor: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let visible = null;

    if( this.state.showPersons ) {

  
    visible = (
      <StyleRoot>
        <div>
          <Persons 
          persons = {this.state.persons}
          killHim = {this.deletePersonHandler}
          changed = {this.nameChangedHandler.bind(this)} // na primeru radi, ovde ne radi sa events
          />
        </div> 
      </StyleRoot>
      )
      
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
  }


    return (
      <StyleRoot>
      <div className="App">
    
        {visible}
      
          
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
