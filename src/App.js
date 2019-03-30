import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import store from './store';
import Register from './Components/Register/Register.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Container>
              <Switch>
                <Route path='/' component={Register} />
              </Switch>
            </Container>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;