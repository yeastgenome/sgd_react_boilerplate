"use strict";
var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var Layout = React.createClass({
  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Home</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <form className="navbar-form navbar-right">
                <input type="text" className="form-control" placeholder="Search..." />
              </form>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row application-row">
            <div className="col-sm-12 main">
              <div className="row">
                <div className="col-sm-3 main">
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link to="index">Home</Link>
                    </li>
                    <li>
                      <Link to="papers">Papers</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-9 main">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Layout;
