import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Products from './components/products/products'
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './styles/index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={Products}/>
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
