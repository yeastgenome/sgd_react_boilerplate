import React, { Component } from 'react';

class ReferencesIndex extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      referDetails: [],

    };
  }

  // get references list by ajax calls
  getReferenceList() {
    const url = 'http://yeastgenome.org/webservice/references/this_week';
    
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({referDetails: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });

    console.log(this.state.referDetails);
  }

  // creates a list od user details formatted to be displayed by render function
  renderReferList() {
    this.getReferenceList(); 
    // let listUsers = this.state.referDetails.map( (r) => {
    //   return (
    //     <tr key={r.id}>
    //       <td>{u.username}</td> <hr/>
    //       <td>{u.email}</td>
    //     </tr>
    //   );
    // });

    return (
        {}
    );
  }

  render() {
    return (
      <div>
      {/*<div>
        <h1>Users</h1>
          <table styles="width:100%">
            <thead>
              <tr>
                <th>Username</th> <hr/>
                <th>Email</th>
              </tr>
            </thead>
            {this.renderReferList()}
          </table>   
          
      </div>*/}
      {this.renderReferList()}
      </div>
    );
  }
}

export default ReferencesIndex;
