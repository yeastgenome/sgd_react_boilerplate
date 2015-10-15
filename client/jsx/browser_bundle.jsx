"use strict";
var React = require('react');
var Router = require('react-router');
var EventEmitter = require('events').EventEmitter;
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var loadingEvents = new EventEmitter();

// define routes
var routes = require("./routes.jsx");

// run application with defined routes, pass it store as property
Router.run(routes, function (Handler) {
	React.render(<Handler />, document.getElementById("j-application"));
});
