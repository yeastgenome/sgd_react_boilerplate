var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var SearchResult = React.createClass({
	propTypes: {
		_id: React.PropTypes.string.isRequired,
		category: React.PropTypes.string.isRequired,
		description: React.PropTypes.string,
		name: React.PropTypes.string.isRequired,
		url: React.PropTypes.string.isRequired,
	},

	render: function () {
		return (
			<div className="s-search-result">
				<h3>
					<Link to="gene" params={this.props}>{this.props.name}</Link>
				</h3>
				<p>{this.props.description}</p>
			</div>
		);
	}

});

module.exports = SearchResult;
