import React from "react";
import "./styles.css";
import Welcome from "./Welcome";
import Login from "./Login";
import Firebase from "./config/Firebase.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <h1 className="Header">Firebase React App</h1>
        <br />
        <br />
        {this.state.user ? <Welcome /> : <Login />}
      </div>
    );
  }
}

export default App;
