"use strict";
var React = require('react');
var Router = require('react-router');
var EventEmitter = require('events').EventEmitter;
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var loadingEvents = new EventEmitter();

// store
var ApplicationStore = require("./routes/stores/application_store.jsx");
var store = new ApplicationStore();
// TEMP set fixtures
store.setupFixtures();

// route handler
var routeHandler = require("./routes.jsx");

// assign router to wrapper component
Router.run(routeHandler, function (Handler) {
	React.render(<Handler store={store}/>, document.getElementById("j-application"));
});
