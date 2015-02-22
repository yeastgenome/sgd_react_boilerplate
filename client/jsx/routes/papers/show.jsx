var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var Show = React.createClass({
  mixins: [ Router.State ],
  render () {
    var params = this.getParams();
    var paper = this.props.store.getPaper(params.id);
    return (
      <div>
        <p><Link to="papers">Back</Link></p>
        <h1>{paper.get("title")}</h1>
        <p>{paper.get("abstract")}</p>
      </div>
    );
  }
});

module.exports = Show;
