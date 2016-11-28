import React, { Component } from 'react';
import { Link } from 'react-router';
import userList from '../data/userData';

class UsersIndex extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userDetails: userList,
      
    };
  }

  renderUserList () {
    let listNodes = papers.map( (d) => {
      let url = `papers/${d.id}`;
      return (
        <div key={`paperList${d.id}`}>
          <Link to={url}>{d.title}</Link>
          <hr />
        </div>
      );
    });
    return (
      <div>
        {listNodes}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.renderUserList()}
      </div>
    );
  }
}

export default UsersIndex;
