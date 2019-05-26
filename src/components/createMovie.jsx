import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/form';
class CreateMovie extends Form {

    state = {
        data:{title: "", genre: "", stock: "", rate: ""},
        errors:{title: "", genre: "", stock: "", rate: ""}
    };
    // Defining schema/Set of validation for this(Login Form) form

    schema = {
        title: Joi.string().required().label('Title'),
        genre: Joi.string().required().label('Genre'),
        stock: Joi.number().min(0).required().label('Stock'),
        rate: Joi.number().min(1).max(10).required().label('Display Name'),
    };
    doSubmit = (obj) => {
        debugger;
        console.log(this.state.data.title + ' info has ' + ' submitted');
        const movie = this.state.data;
        const movies = this.props.movies;
        let lastId = movies[movies.length - 1].id;
        movie.id = lastId + 1;
        movies.push(movie);
        this.props.OnAddUpdate(movies);
        this.props.history.push('/movies');
        
    };

    render() { 
        debugger;
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderInput('genre', 'Genre')}
                    {/* <select className="form-control">
                        {this.props.geners.map(g => <option key={g.id} value={g.text}>{g.text === 'All Genre'? 'Select Genre': g.text}</option>)}
                    </select> */}
                    {this.renderInput('stock', 'Stock', 'number')}
                    {this.renderInput('rate', 'Rate', 'number')}
                    
                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
}
 
export default CreateMovie;