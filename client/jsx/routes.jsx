"use strict";
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

// require route handlers
var Layout = require("./layout.jsx");
var Index = require("./routes/index.jsx");
var PapersIndex = require("./routes/papers/index.jsx");
var PaperShow = require("./routes/papers/show.jsx");

// define layout and yield to RouteHandler
var App = React.createClass({
  render () {
    return (
      <Layout>
        <RouteHandler {...this.props}/>
      </Layout>
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
      name="papers" path="papers"
      handler={PapersIndex}
    />
    <Route
      name="paper" path="papers/:id"
      handler={PaperShow}
    />
  </Route>
);
