import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import Products from './products/products'
import '../styles/App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      furniture: []
    }
  }

  getProducts = () => {
      fetch('/api/products/')
      .then(response => response.json())
      .then(furniture => {
        console.log(furniture);
        this.setState({furniture})
      })
  }

  componentDidMount = () => {
    this.getProducts()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Outdoor Living</h2>
        </div>
        <p className="App-intro">
          It's that time of year!
        </p>

        <Link to={{pathname: "/products", state: {furniture: this.state.furniture}}}> Products </Link>
      </div>
    );
  }
}

export default App;
