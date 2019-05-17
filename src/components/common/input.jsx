import React, { Component } from 'react';
const Input = ({fieldName, value, label, OnChange}) => {
    return ( 
        <div className="form-group">
        <label htmlFor={fieldName}> {label} </label>
        <input 
        value={value} 
        name={fieldName} 
        onChange={OnChange}  
        id={fieldName} 
        type="text" 
        className="form-control" />
        </div>
     );
}
 
export default Input;