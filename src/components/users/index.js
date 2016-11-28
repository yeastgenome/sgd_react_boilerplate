import React, { Component } from 'react';
import userList from '../data/userData';

class UsersIndex extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userDetails: userList,

    };
  }

  // creates a list od user details formatted to be displayed by render function
  renderUserList () {
    let listUsers = this.state.userDetails.map( (u) => {
      return (
        <tr key={u.email}>
          <td>{u.username}</td> <hr/>
          <td>{u.email}</td>
        </tr>
      );
    });

    return (
        listUsers
    );
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
          <table styles="width:100%">
            <thead>
              <tr>
                <th>Username</th> <hr/>
                <th>Email</th>
              </tr>
            </thead>
            {this.renderUserList()}
          </table>   
          
      </div>
    );
  }
}

export default UsersIndex;
