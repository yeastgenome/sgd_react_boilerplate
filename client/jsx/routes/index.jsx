var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

module.exports = React.createClass({
	render () {
		var gene = {
			id: 1
		};
		return (
			<div>
				<Link to="search">
					<h1>Search</h1>
				</Link>
			</div>
		);
	}
});
