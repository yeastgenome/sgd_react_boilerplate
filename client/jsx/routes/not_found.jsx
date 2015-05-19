var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

module.exports = React.createClass({
	render () {
		return (
			<div className="s-404">
				<h1>404</h1>
				<p>Sorry, not found.</p>
			</div>
		);
	}
});
