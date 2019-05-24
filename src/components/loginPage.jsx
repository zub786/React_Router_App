import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/form';
class LoginPage extends Form {

    state = {
        data:{username:"", password:""},
        errors:{username: "", password:""}
    };

    // Defining schema/Set of validation for this(Login Form) form

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };
    doSubmit = () => {
        console.log(this.state.data.username + ' info has ' + ' submitted');
        alert(this.state.data.username + ' info has ' + ' submitted');
    };

    render() { 
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}
 
export default LoginPage;