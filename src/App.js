import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {
 
  state = {
      persons: [
        {name: "Max", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 26}
      ],
      username : "please enter username"
    }

    switchNameHandler(newName) {
      this.setState({
        persons: [
          {name: newName, age: 33},
          {name: "Manu", age: 29},
          {name: "Stephanie", age: 19}
        ]
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

    inputName(event) {
      this.setState ({
        username : event.target.value
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style = {style} onClick = {this.switchNameHandler.bind(this, "Mimim")} >Switch Name</button>
       

        <Person name = {this.state.persons[0].name}
        age = {this.state.persons[0].age}
        click = {this.switchNameHandler.bind(this, "REREROOO")}
        />

        <Person name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          changed = {this.nameChangedHandler.bind(this)}
          >  Hobbies: Racing </Person>

        <Person name = {this.state.persons[2].name}
         age = {this.state.persons[2].age}/>
        
        <hr />
        <UserInput username = {this.state.username}
                  inputName = {this.inputName.bind(this)}
        />

        <hr />

        <UserOutput username = {this.state.username} />

        <UserOutput username = "neki drugi username" />
        

      </div>
    );
  }
}

export default App;
