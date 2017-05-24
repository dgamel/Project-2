import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import Products from './products/products';
import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Outdoor Living</h2>
        </div>
        <p className="App-intro">
          It's that time of the year!
        </p>

        <Link to={{pathname: "/products"}}> Products </Link>
      </div>
    );
  }
}

export default App;
