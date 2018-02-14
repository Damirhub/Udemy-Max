import React from 'react';
import Radium from 'radium';
import "./Person.css";

/**Ne koristi se This u const, samo u class */
const person = (props) => {
    var style = {
       '@media (min-width: 500px)' : {            
                width: '400px'
    }
}
    
    return (
        <div className = "Person" style = {style}>
         <p onClick = {props.killHim}>I'm {props.name} and i am  {props.age} years old</p>
         <p>{props.children}</p>
         
         <input type = "text" defaultValue = {props.name} onChange = {props.changed}/>
        </div>
    )
}

export default Radium(person);