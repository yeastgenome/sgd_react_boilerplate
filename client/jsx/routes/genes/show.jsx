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
        <div className="col-sm-2 hidden-sm hidden-xs">
          <ul className="nav sidebar-nav affix">
            <li><a href="#">Overview</a></li>
            <li><a href="#">Orthologs</a></li>
            <li><a href="#">Disease</a></li>
            <li><a href="#">Sequence</a></li>
          
            <li><a href="#">Protein</a></li>
            <li><a href="#">Function</a></li>
            <li><a href="#">Interactions</a></li>
            <li><a href="#">Literature</a></li>
          </ul>
        </div>
        <div className="col-sm-10 main">
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
