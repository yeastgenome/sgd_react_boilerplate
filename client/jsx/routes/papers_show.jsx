var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

// TEMP
// hardcode paper data
var paper = {
  id: 1,
  title: "a good title",
  abstract: "a great abstract"
};

var Show = React.createClass({
  render () {
    // var { paper } = this.props.data;
    return (
    <div>
      <p><Link to="papers">Back</Link></p>
      <h1>{paper.title}</h1>
      <p>{paper.abstract}</p>
    </div>
    );
  }
});

module.exports = Show;
