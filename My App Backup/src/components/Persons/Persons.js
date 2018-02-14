import React from 'react';

import Person from './Person/Person';

const persons = (props) => 

   props.persons.map( (person, indexOf) =>{
        return(
          <Person
          killHim = {()=> props.killHim(indexOf)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
         // changed = {this.nameChangedHandler.bind(this, event, indexOf)}
          changed = {( event ) => props.changed(event, person.id)}
         // changed = { (event) => this.nameChangedHandler(event, indexOf)}
          />
        )
    })

    export default persons;