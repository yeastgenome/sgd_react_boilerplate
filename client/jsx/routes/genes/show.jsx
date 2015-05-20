var React = require("react");
var Router = require("react-router");
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var _ = require("underscore");

var Show = React.createClass({
  mixins: [Router.State],

  render: function () {
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
          <div className="panel panel-info">
            <div className="panel-body">
              <span className="glyphicon glyphicon-info-sign"></span>  This page is conceptual and under development; links may not be active.
            </div>
          </div>
          {this._getOverviewNode()}
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

  _getOverviewNode: function () {
    var _id = this.getParams()._id;
    var gene = this._getGene(_id);

    if (!gene) {
      return null;
    }

    var metaData = gene.get("overview");
    var overviewNodes = [];
    var i = 0;
    for (key in metaData) {
      overviewNodes.push(<dt key={"overviewKey" + i}>{key}</dt>);
      overviewNodes.push(<dd key={"overviewValye" + i}>{metaData[key]}</dd>);
      i++;
    }

    return (
      <div>
        <h1>{gene.get("name")}</h1>
        <dl className="dl-horizontal">
          {overviewNodes}
        </dl>
      </div>
    );
  },

  _getGene: function (id) {
    // temp fake gene
    return this.props.store.getGene(id);
  }

});

module.exports = Show;
