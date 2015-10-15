"use strict";
var React = require("react");
var Router = require("react-router");
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var Index = React.createClass({
  getInitialState() {
    return {
      data: [
        {
          id: "S000046605",
          title: "Polarization of cell growth in yeast. I. Establishment and maintenance of polarity states. J Cell Sci 113 ( Pt 3):365-75"
        },
        {
          id: "S000073427",
          title: "Molecular cloning of the actin gene from yeast Saccharomyces cerevisiae"
        }
      ] 
    };
  },

  render () {
    return (
      <div>
        <h1>Papers</h1>
        {this.renderPaperList()}
      </div>
    );
  },

  renderPaperList () {
  	var listNodes = this.state.data
  		.map( (d, i) => {
  			return <div key={"paperList" + d.id}>
    			<Link to="paper" params={d}>{d.title}</Link>
          <hr />
  			</div>;
  		});
  	return (<div>
  		{listNodes}
	</div>);
  }
});

module.exports = Index;
