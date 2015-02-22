var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var Index = React.createClass({
  render () {
    return (
      <div>
        <h1>Papers</h1>
        {this.renderPaperList()}
      </div>
    );
  },

  renderPaperList () {
  	var listNodes = this.props.store.getPapers()
  		.map( (d, i) => {
  			return <div key={"paperList" + i}>
    			<Link to="paper" params={d}>{d.get("title")}</Link>
          <hr />
  			</div>;
  		});
  	return (<div>
  		{listNodes}
	</div>);
  }
});

module.exports = Index;
