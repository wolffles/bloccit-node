import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import AppNavbar from './components/AppNavbar';
import Topic from './components/Topic';
import Post from './components/Post';

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
            <Route exact path="/topics" component={Topic} />
            <Route exact path="/topics/:topicId" component={Post} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
