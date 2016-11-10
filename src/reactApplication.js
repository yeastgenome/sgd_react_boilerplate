import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

class ReactApp extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
}

export default ReactApp;
