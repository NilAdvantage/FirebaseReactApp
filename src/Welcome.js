import React from "react";
import Firebase from "./config/Firebase.js";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    Firebase.auth().signOut();
  }
  render() {
    return (
      <div className="Welcome">
        <h1> Welcome User</h1>
        <button className="btn btn-outline-dark" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Welcome;
