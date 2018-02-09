import React from 'react';
import "./Person.css"

/**Ne koristi se This u const, samo u class */
const person = (props) => {
    
    return (
        <div className = "Person">
         <p onClick = {props.killHim}>I'm {props.name} and i am  {props.age} years old</p>
         <p>{props.children}</p>
         
         <input type = "text" defaultValue = {props.name} onChange = {props.changed}/>
        </div>
    )
}

export default person;