var React = require("react");

var Show = React.createClass({
  render () {
    var { contact } = this.props.data;
    return (
    <div>
      <p><Link to="contacts">Back</Link></p>
      <h1>{contact.first} {contact.last}</h1>
      <img key={contact.avatar} src={contact.avatar}/>
    </div>
    );
  }
});

module.exports = Show;
