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
				<h1>#Index</h1>
				 <Link to="gene" params={gene}>Exmple Gene</Link>
			</div>
		);
	}
});
