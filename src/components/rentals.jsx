import React, { Component } from 'react';   
const Rentals = (props) => {
    console.log(props);
    props.history.replace('/');
    return ( 
        <h1>Rentals</h1>
     );
}
 
export default Rentals;