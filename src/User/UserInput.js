import React from "react";

const inputStyle = {
    backgroundColor: 'lightblue',
    color: "black"
}

const UserInput = (props) => {
    return(
<input style = {inputStyle} type = 'text' defaultValue = {props.username} onChange = {props.inputName} />

    )
}

export default UserInput;