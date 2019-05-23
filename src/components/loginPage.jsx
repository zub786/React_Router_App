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
        const {data, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        label="User Name"
                        OnChange={this.handleChange}
                        value={data.username}
                        fieldName="username"
                        error={errors.username} />
                    <Input
                        label="Password"
                        OnChange={this.handleChange}
                        value={data.password}
                        fieldName="password"
                        error={errors.password} />
                    <button 
                    disabled={this.validate()}
                    className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginPage;