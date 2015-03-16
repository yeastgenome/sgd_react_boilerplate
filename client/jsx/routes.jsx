"use strict";
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

// require route handlers
var Index = require("./routes/index.jsx");
var PapersIndex = require("./routes/papers/index.jsx");
var PaperShow = require("./routes/papers/show.jsx");
var PaperEdit = require("./routes/papers/edit.jsx");

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
              <li>
                <Link to="papers">Papers</Link>
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
      name="papers" path="papers"
      handler={PapersIndex}
    />
    <Route
      name="paper" path="papers/:id"
      handler={PaperShow}
    />
    <Route
      name="editPaper" path="papers/edit/:id"
      handler={PaperEdit}
    />
  </Route>
);
