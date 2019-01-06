import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from 'Components/api-controller'

class App extends Component {

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

  registerUser = () => {
    api.registerUser()
  }

  render() {
    return (
      <div className="App">
        <form>
          <input id="email" type="email" placeholder="email"></input>
          <input id="firstName" type="text" placeholder="First Name"></input>
          <input id="lastName" type="text" placeholder="Last Name"></input>
          <input id="password" type="password" placeholder="password"></input>
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default App;