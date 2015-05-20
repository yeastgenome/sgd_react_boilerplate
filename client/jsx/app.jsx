"use strict";
var React = require('react');
var Router = require('react-router');
var EventEmitter = require('events').EventEmitter;
var { HistoryLocation, Route, DefaultRoute, RouteHandler, Link } = Router;
// ? where does this go
var eventEmitter = new EventEmitter();

// store
require("es6-promise").polyfill()
var ApplicationStore = require("./store/application_store.jsx");
// define routes
var routes = require("./routes.jsx");

// setup data store
var store = new ApplicationStore();
store.primeFromUrl(window.location.pathname, err => {
	// run application with defined routes, pass it store as property
	Router.run(routes,  HistoryLocation, function (Handler) {
		React.render(<Handler store={store}/>, document.getElementById("j-application"));
	});
});
