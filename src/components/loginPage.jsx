import React, { Component } from 'react';
import Input from './common/input';
class LoginPage extends Component {
    username = React.createRef();
    // componentDidMount(){
    //     this.username.current.focus();
    // };
    state = {
        account:{username:"", password:""},
        errors:{username: "", password:""}
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

        if (account.username.trim() === '')
            errors.username = 'UserName is required.';

        if (account.password.trim() === '')
            errors.password = 'Password is required.';
        
            return Object.keys(errors).length === 0? null: errors;
    };

    validateProperty = ({name, value}) => {
        const { account } = this.state;
        const errors = {};
        if (name === 'username') {
            if (value.trim() === '') return "Username is required";
        }
        if (name === 'password') {
            if (value.trim() === '') return "Password is required";
        }
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