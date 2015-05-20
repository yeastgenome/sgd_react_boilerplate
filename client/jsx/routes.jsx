"use strict";
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

// require route handlers
var Index = require("./routes/index.jsx");
var GeneShow = require("./routes/genes/show.jsx");
var NotFound = require("./routes/not_found.jsx");
var Search = require("./routes/search.jsx");

// define layout and yield to RouteHandler

var App = React.createClass({
  render () {
    return (
      <div>
        <div className="logo-container">
          <img src="/assets/img/human_portal_logo.png" className="human-portal-logo" />
        </div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <form className="navbar-form navbar-right">
                <input type="text" className="form-control search-textbar" placeholder="gene name, disease..." />
                <input type="submit" className="btn btn-info" value="Search" />
              </form>
              <ul className="nav navbar-nav navbar-left">
                <li><Link to="index"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-info-sign"></span> About</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-question-sign"></span> Help</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row application-row">
            <div className="col-sm-12">
              <RouteHandler {...this.props}/>
            </div>
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
      name="gene" path="gene/:_id"
      handler={GeneShow}
    />
    <Route
      name="search" path="search"
      handler={Search}
    />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);
