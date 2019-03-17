import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Register from './Components/Register/Register.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Container>
            <Switch>
              <Route path='/' component={Register} />
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;