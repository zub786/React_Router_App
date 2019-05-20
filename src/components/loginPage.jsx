import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
class LoginPage extends Component {
    username = React.createRef();
    // componentDidMount(){
    //     this.username.current.focus();
    // };
    state = {
        account:{username:"", password:""},
        errors:{username: "", password:""}
    };

    // Defining schema/Set of validation for this(Login Form) form

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    handleSubmit = e => {
        e.preventDefault();
        
        //  Calling Server
       const errors = this.validate();
       console.log(errors);
        this.setState({errors: errors || {}});
        if(errors)
        return;
        console.log(this.state.account.username + ' info has ' + ' submitted');
        alert(this.state.account.username + ' info has ' + ' submitted');
    };
    validate = () => {
        const { account } = this.state;
        const errors = {};
        const valResult = Joi.validate(this.state.account, this.schema, {abortEarly: false});
        if(!valResult.error) return null;
        for(let item of valResult.error.details) errors[item.path[0]] = item.message;
            return errors;
    };

    validateProperty = ({name, value}) => {
        debugger;
        const obj = {[name]: value};
        const objSchema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, objSchema);
        return error? error.details[0].message: null;
    };

    handleChange = ({currentTarget: input}) => {
       const account = {...this.state.account};
       account[input.name] = input.value;
       const errors = {...this.state.errors};
       const errMessage = this.validateProperty(input);
       errMessage? errors[input.name] = errMessage
       : delete errors[input.name];
       this.setState({account: account, errors});
    };
    render() { 
        const {account, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        label="User Name"
                        OnChange={this.handleChange}
                        value={account.username}
                        fieldName="username"
                        error={errors.username} />
                    <Input
                        label="Password"
                        OnChange={this.handleChange}
                        value={account.password}
                        fieldName="password"
                        error={errors.password} />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginPage;