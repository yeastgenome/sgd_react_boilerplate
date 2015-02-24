var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var Show = React.createClass({
  mixins: [ Router.State ],

  componentDidMount: function () {
      var paper = this._getPaper();
      paper.fetch().then( err => {
        this.props.store.setPaper(paper);
        if (this.isMounted()) this.forceUpdate();
      });
  },

  render: function () {
    var paper = this._getPaper();
    return (
      <div>
        <p><Link to="papers">Back</Link></p>
        <h1>{paper.get("title")}</h1>
        <p>{paper.get("abstract")}</p>
      </div>
    );
  },

  _getPaper: function () {
    var params = this.getParams();
    return this.props.store.getPaper(params.id);
  }

});

module.exports = Show;
