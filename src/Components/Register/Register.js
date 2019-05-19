import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import userRequests from '../ApiRequests/UserRequests';

class Register extends Component {

    state = {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    registerUser = (e) => {
        e.preventDefault()
        userRequests.registerUser(this.state.email, this.state.firstName, this.state.lastName, this.state.password).then(res => console.log(res))
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.registerUser}>
                    <input onChange={this.handleFieldChange} id="email" type="email" placeholder="email"></input>
                    <input onChange={this.handleFieldChange} id="firstName" type="text" placeholder="First Name"></input>
                    <input onChange={this.handleFieldChange} id="lastName" type="text" placeholder="Last Name"></input>
                    <input onChange={this.handleFieldChange} id="password" type="password" placeholder="password"></input>
                    <Button primary>Register</Button>
                </form>
            </div>
        );
    }
}

export default Register;