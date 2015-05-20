var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var Show = React.createClass({
  mixins: [Router.State],

  render: function () {
    var _id = this.getParams()._id;
    var gene = this._getGene(_id);

    if (!gene) {
      return null;
    }
    return (
      <div className="row">
        <div>
        </div>
        <div>
          <h1>{gene.get("name")}</h1>
        </div>
      </div>
    );
  },

  componentDidMount: function () {
    var _id = this.getParams()._id;
    this.props.store.fetchItem(_id, (err, data) => {
      if (this.isMounted()) this.forceUpdate();
    })
  },

  _getGene: function (id) {
    // temp fake gene
    return this.props.store.getGene(id);
  }

});

module.exports = Show;
