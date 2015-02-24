"use strict";
var React = require('react');
var Router = require('react-router');
var EventEmitter = require('events').EventEmitter;
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var loadingEvents = new EventEmitter();

// store
var ApplicationStore = require("./store/application_store.jsx");
// define routes
var routes = require("./routes.jsx");

// setup data store
var store = new ApplicationStore();
// TEMP set fixtures
store.setupFixtures();

// run application with defined routes, pass it store as property
Router.run(routes, function (Handler) {
	React.render(<Handler store={store}/>, document.getElementById("j-application"));
});
