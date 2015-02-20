var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

// TEMP fake dataa
var papers = [
	{
		id: 1,
		title: "A Good Title",
		abstract: "Ipsum Lorem Bacon"
	},
	{
		id: 2,
		title: "A Good Title 2",
		abstract: "Ipsum Lorem Bacon2"
	}
];

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
  	var listNodes = papers
  		.map( (d, i) => {
  			return <li key={"paperList" + i}>
  				
  			<Link to="paper" params={d}>{d.title}</Link>
  			</li>;
  		});
  	return (<ul>
  		{listNodes}
	</ul>);
  }
});

module.exports = Index;
