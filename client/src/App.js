import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
class App extends Component {
  state = {
    response: ''
  };

  componentDidMount(){
      this.callApi()
        .then(response => this.setState({ response: response.express}))
        .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200){
      throw Error(body.message);
    }

    return body;
  }


  render() {
    return (
      <div>
        <Home/>
        <p className="App-intro">
        { this.state.response }
        </p>
      </div>
    );
  }
}

export default App;
