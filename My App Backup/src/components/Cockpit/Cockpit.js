import React from 'react';

const cockpit = (props) => {


    let classes = [];
    if(this.state.persons.length <= 2) {
    classes.push('red');
    }
  
    if(this.state.persons.length <= 1) {
    classes.push('bold');
    }
  



return (

<div className="App">
  <h1>Hi, I'm a React App</h1>
  <p className = {classes.join(" ")}>This is really working</p>
  <button style = {style} onClick = {this.togglePersonsHandler} >Switch Name</button>

  {visible}

    
</div>
//</StyleRoot>
);
}