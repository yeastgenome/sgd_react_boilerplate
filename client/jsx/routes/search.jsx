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
    // read query into store from URL param
    this._setQueryFromURL()

    // run search
    this._fetchSearchResults();
  },

  componentDidUpdate: function (nextProps, nextState) {
    var newQuery = this.context.getCurrentQuery().q || "";
    var oldQuery = this.props.store.getQuery();
    // if query changed, set and re-fetch
    if (oldQuery !== newQuery) {
      this._setQueryFromURL();
      this._fetchSearchResults();
    }
  },

  _setQueryFromURL: function () {
    var query = this.context.getCurrentQuery().q || "";
    this.props.store.setQuery(query);
  },

  _fetchSearchResults: function () {
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
    var query = this.props.store.getQuery();
    var queryDesciptionString = (query === "") ? "items." : `results for "${query}."`

    return (
      <h3>Showing {results.length} of {total.toLocaleString()} {queryDesciptionString}</h3>
    );

  },

});

module.exports = Search;
