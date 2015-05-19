"use strict";
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

// require route handlers
var Index = require("./routes/index.jsx");
var GeneShow = require("./routes/genes/show.jsx");
var NotFound = require("./routes/not_found.jsx");

// define layout and yield to RouteHandler
var App = React.createClass({
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3 main">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <Link to="index">Home</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-9 main">
            <RouteHandler {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
});

// assign handlers to routes
module.exports = (
  <Route name="appIndex" path="/" handler={App}>
    {/* default */}
    <DefaultRoute
      name="index" handler={Index}
    />
    <Route
      name="gene" path="gene/:id"
      handler={GeneShow}
    />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);
