import React, { Component } from 'react';
import { Router, browserHistory, createMemoryHistory } from 'react-router';
import routes from './routes';

class ReactApp extends Component {
  render() {
    let _history = (typeof browserHistory === 'object') ? browserHistory : createMemoryHistory('/');
    return (
      <Router history={_history}>
        {routes}
      </Router>
    );
  }
}

export default ReactApp;
