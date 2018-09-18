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


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <main>
            <Route exact path="/" component={Home} />  {/* exact path because by default a route matches any path in the URL that begins with the value of the path prop */}
            <Route path="/topics" component={Topic} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
