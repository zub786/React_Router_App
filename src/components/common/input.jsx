import React, { Component } from 'react';
const Input = ({fieldName, label, OnChange, error, ...rest}) => {
    return ( 
        <React.Fragment>
            <div className="form-group">
        <label htmlFor={fieldName}> {label} </label>
        <input  
        
        name={fieldName} 
        id={fieldName}
        onChange={OnChange}  
        {...rest}
        className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
        </div>
            </React.Fragment>
     );
}
 
export default Input;