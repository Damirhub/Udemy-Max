import React from "react";
import './User.css';

const UserOutput = (props) => {
    return(
    <div>
     <p className = "para">Paragraph one:</p>
     
     <p className = "para"> Paragraph two:</p>

     <h2><strong>username: {props.username}</strong></h2>
     <h2><strong>username: {props.username}</strong></h2>
    </div>
    )
}

export default UserOutput;