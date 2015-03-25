"use strict";
var React = require("react");
var Router = require("react-router");
var express = require("express");
var app = express();

// prepare to import jsx modules
require("node-jsx").install({ harmony: true });

// store
var ApplicationStore = require("./client/jsx/store/application_store.jsx");
// setup data store
var store = new ApplicationStore();
store.setupPaperFixtures();
// define routes
var routes = require("./client/jsx/routes.jsx");
 
app.get("/*", function (req, res) {
	// run application with defined routes, current route, pass it store as property
	Router.run(routes, req.originalUrl, function (Handler) {
		var appHTMLString = React.renderToStaticMarkup(React.createElement(Handler, { store: store }));
		var htmlString = "<!doctype html><html><body>" + appHTMLString + "</body></html>";
		res.send(htmlString);
	});
});
 
app.listen(3000);
