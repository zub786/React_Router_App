import React, { Component } from 'react';

const MovieDetails = ({match}) => {
    debugger;
    return ( 
        <h1> Movie Details - {match.params.title} </h1>
     );

}
 
export default MovieDetails;