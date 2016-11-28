import React, { Component } from 'react';
// import { Link } from 'react-router';
import userList from '../data/userData';

class UsersIndex extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userDetails: userList,

    };
  }

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

// <div>
//         <h1>Users</h1>
//         // <table style="width:100%">
//         //   <tr>
//             // <p>Username<p>
//             // <p>Email</p> 
//           // </tr>
//           {this.renderUserList()}
//         // </table>
//       </div>

export default UsersIndex;
