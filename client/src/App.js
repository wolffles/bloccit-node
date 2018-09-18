import React, { Component } from 'react';
import Home from './components/Home'
import AppNavbar from './components/AppNavbar';
import {Route} from 'react-router-dom';
import Topic from './components/Topic';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <AppNavbar />
          <main>
            <Route exact path="/" component={Home} />  {/* exact path because by default a route matches any path in the URL that begins with the value of the path prop */}
            <Route path="/topic" component={Topic} />
          </main>
          <p className="App-intro">
          { this.state.response }
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
