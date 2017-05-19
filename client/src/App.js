import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      title: 'change me'
    }
  }

  componentDidMount = () => {
    fetch('/api')
    .then(response => response.json())
    .then(response => {
      let title = response.title
      this.setState({title})
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{this.state.title}!</h3>
      </div>
    );
  }
}

export default App;
