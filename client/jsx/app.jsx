var React = require('react');
var Router = require('react-router');
var EventEmitter = require('events').EventEmitter;
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var loadingEvents = new EventEmitter();

// require route handlers
var Index = require("./routes/index.jsx");
var PapersIndex = require("./routes/papers/index.jsx");
var PaperShow = require("./routes/papers/show.jsx");

// store
var ApplicationStore = require("./routes/stores/application_store.jsx");
var store = new ApplicationStore();
// TEMP set fixtures
store.setupFixtures();

var App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});

// assign handlers to routes
var routes = (
  <Route name="appIndex" path="/" handler={App}>
    {/* default */}
    <DefaultRoute
      name="index" handler={Index}
    />
    <Route
      name="papers" path="papers"
      handler={PapersIndex}
    />
    <Route
      name="paper" path="papers/:id"
      handler={PaperShow}
    />
  </Route>
);



// assign router to wrapper component
Router.run(routes, function (Handler) {
	React.render(<Handler store={store}/>, document.getElementById("j-application"));
});
