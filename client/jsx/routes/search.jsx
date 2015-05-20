var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var SearchResult = require("./search/search_result.jsx");

var Search = React.createClass({
  mixins: [Router.State],

  getInitialState: function () {
    return {
      currentPage: 0,
      error: null,
      isLoading: true,
      aggObject: {},
    };
  },

  render: function () {
    return (
      <div>
        {this._getResultsTextNode()}
        {this._getResultsNode()}
      </div>
    );
  },

  componentDidMount: function () {
    this.props.store.fetchSearchResults( (err, _results) => {
      if (this.isMounted()) {
        this.forceUpdate();
      }
    });
  },

  _getResultsNode: function () {
    var results = this.props.store.getSearchResults();

    return results.map( (d, i) => {
      return (
        <SearchResult {...d} key={"searchResult" + i}/>
      );
    })


  },

  _getResultsTextNode: function () {
    var results = this.props.store.getSearchResults();
    var total = this.props.store.getSearchTotal();
    return (
      <h3>Showing {results.length} of {total.toLocaleString()} items.</h3>
    );

  },

});

module.exports = Search;
