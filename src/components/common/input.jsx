import React, { Component } from 'react';
const Input = ({fieldName, value, label, OnChange, error}) => {
    return ( 
        <React.Fragment>
            <div className="form-group">
        <label htmlFor={fieldName}> {label} </label>
        <input 
        value={value} 
        name={fieldName} 
        onChange={OnChange}  
        id={fieldName} 
        type="text" 
        className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
        </div>
            </React.Fragment>
     );
}
 
export default Input;