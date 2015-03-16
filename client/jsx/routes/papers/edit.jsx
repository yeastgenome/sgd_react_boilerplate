var React = require("react");
var Router = require("react-router");
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var t = require("tcomb-form");
var Form = t.form.Form;
var ToSchema = require("tcomb-json-schema");

module.exports = React.createClass({
  mixins: [Router.State],

  render: function () {
    var exampleValidationObj = {
      title: "Paper",
      type: "object",
      properties: {
        title: { type: "string" },
        abstract: { type: "string" }
      },
      required: ["title"]
    };

    // convert json validation to tcomb schema object which can be consumed by form component
    var tcombSchema = ToSchema(exampleValidationObj);

    return (
      <div>
        <Form ref="form" type={tcombSchema} />
        <a className="btn btn-default" onClick={this._onSubmit}>Save</a>
      </div>
    );
  },

  _onSubmit: function (e) {
    e.preventDefault();
    var value = this.refs.form.getValue();
    console.log(value);
  }
});
