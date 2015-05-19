var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var Show = React.createClass({
  mixins: [Router.State],

  render: function () {
    var gene = this._getGene();
    return (
      <div>
        <h1>{gene.get("name")}</h1>
      </div>
    );
  },

  _getGene: function () {
    // temp fake gene
    return this.props.store.getGene(1);
  }

});

module.exports = Show;
