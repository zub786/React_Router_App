import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/form';
class Registration extends Form {

    state = {
        data:{username:"", password:"", name:""},
        errors:{username: "", password:"", name:""}
    };

    // Defining schema/Set of validation for this(Login Form) form

    schema = {
        username: Joi.string().email().required().label('Username'),
        password: Joi.string().min(6).max(8).required().label('Password'),
        name: Joi.string().required().label('Display Name')
    };
    doSubmit = () => {
        console.log(this.state.data.username + ' info has ' + ' submitted');
        alert(this.state.data.username + ' info has ' + ' submitted');
    };

    render() { 
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Display Name', 'text')}
                    
                    {this.renderButton('Register')}
                </form>
            </div>
        );
    }
}
 
export default Registration;