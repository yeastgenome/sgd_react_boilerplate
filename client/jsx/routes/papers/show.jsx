"use strict";
var React = require("react");
var Router = require("react-router");
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var $ = require("jquery");

var Show = React.createClass({
  mixins: [Router.State],

  getInitialState() {
    return {
      data: null  // { title, abstract }  
    };
  },

  componentDidMount: function () {
    this._fetchPaper();
  },

  render: function () {
    if (!this.state.data) return <h1>Loading...</h1>;
    return (
      <div>
        <p><Link to="papers">Back</Link></p>
        <h1>{this.state.data.title}</h1>
        <p>{this.state.data.abstract}</p>
      </div>
    );
  },

  _fetchPaper: function () {
    var paperId = this.getParams().id;
    var _url = "http://www.yeastgenome.org/backend/reference/" + paperId + "/overview";
    $.ajax({
      url: _url,
      dataType: "JSONP",
      success: (_data, status) => {  // ES6 arrow function, same as function(data, status) {}.bind(this)
        this.setState({ data: { title: _data.title, abstract: _data.abstract } });
      },
      error: function (xhr, textStatus, errorThrown) { console.log("API error: ", errorThrown); }
    });
  }

});

module.exports = Show;
