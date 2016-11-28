import React, { Component } from 'react';
// import { Link } from 'react-router';
import userList from '../data/userData';

class UsersIndex extends Component {
  
  constructor(props) {
    super(props);
    // this.state = {
    //   userDetails: userList,

    // };
  }

  renderUserList () {
    // console.log(this.state.userDetails);
    let listUsers = userList.map( (u) => {
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
            <p>Username</p>
            <p>Email</p> 
          {this.renderUserList()}
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
