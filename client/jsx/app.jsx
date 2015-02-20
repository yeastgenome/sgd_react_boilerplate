var React = require('react');
var Router = require('react-router');
var EventEmitter = require('events').EventEmitter;
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var loadingEvents = new EventEmitter();

// require route handlers
var PapersIndex = require("./routes/papers_index.jsx");
var PaperShow = require("./routes/papers_show.jsx");

// assign handlers to routes
var routes = (
  <Route name="papers" path="/" handler={App}>
    {/* default */}
    <DefaultRoute
      name="index" handler={PapersIndex}
    />
    <Route
      name="paper" path="papers/:id"
      handler={PaperShow}
    />
  </Route>
);

// master wrapper component rendered to DOM by Router
var App = React.createClass({
  getInitialState () {
    return { loading: false };
  },

  componentDidMount () {
    var timer;
    loadingEvents.on('loadStart', () => {
      clearTimeout(timer);
      // for slow responses, indicate the app is thinking
      // otherwise its fast enough to just wait for the
      // data to load
      timer = setTimeout(() => {
        this.setState({ loading: true });
      }, 300);
    });

    loadingEvents.on('loadEnd', () => {
      clearTimeout(timer);
      this.setState({ loading: false });
    });
  },

  // renderContacts () {
  //   return this.props.data.contacts.map((contact, i) => {
  //     return (
  //       <li key={i}>
  //         <Link to="contact" params={contact}>{contact.first} {contact.last}</Link>
  //       </li>
  //     );
  //   });
  // },

	//           {this.renderContacts()}
  render () {
    return (
      <div className={this.state.loading ? 'loading' : ''}>
        <ul>
        	<Link to="/">Home</Link>
        </ul>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});

// assign router to wrapper component
Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById("j-application"));
});
