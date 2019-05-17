import React, { Component } from 'react';
import Input from './common/input';
class LoginPage extends Component {
    username = React.createRef();
    // componentDidMount(){
    //     this.username.current.focus();
    // };
    state = {
        account:{username:"", password:""}
    };
    handleSubmit = e => {
        e.preventDefault();
        //  Calling Server

        console.log(this.state.account.username + ' info has ' + ' submitted');
        alert(this.state.account.username + ' info has ' + ' submitted');

    };

    handleChange = ({currentTarget: input}) => {
       const account = {...this.state.account};
       account[input.name] = input.value;
       this.setState({account: account});
    };
    render() { 
        
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        label="User Name"
                        OnChange={this.handleChange}
                        value={this.state.account.username}
                        fieldName="username" />
                    <Input
                        label="Password"
                        OnChange={this.handleChange}
                        value={this.state.account.password}
                        fieldName="password" />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginPage;