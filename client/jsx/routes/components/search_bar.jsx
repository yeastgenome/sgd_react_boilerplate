"use strict";
var React = require('react');
var Router = require('react-router');

var SearchBar = React.createClass({
	mixins: [Router.Navigation, Router.State],

	render: function () {
		return (
			<form onSubmit={this._onSubmit} className="navbar-form navbar-right" action="/search">
				<input ref="searchTextBar" type="text" className="form-control search-textbar" placeholder="gene name, disease..." name="q"/>
				<input type="submit" className="btn btn-info" value="Search" />
			</form>
		);
	},

	_onSubmit: function (e) {
		e.preventDefault();
		var newQuery = this.refs.searchTextBar.getDOMNode().value;
		if (this.props.store) {
			// navigate to search page
			var url = "/search?q=" + newQuery;
			this.transitionTo(url);
		}
	}
});

module.exports = SearchBar;
