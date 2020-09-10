import React from "react";
import "./styles.css";
import firebase from "./config/Firebase.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
      count: 0
    };
  }
  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        if (this.state.count >= 3) {
          alert("Your account has been locked");
        } else {
          this.setState({ count: this.state.count + 1 });
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        alert(u);
      })
      .catch((err) => {
        alert(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="Login">
        <form method="Get">
          <h1> Login/Register</h1>
          <label htmlFor="login-email">Email </label>
          <input
            type="email"
            id="login-email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            className="form-control"
            placeholder="name@example.com"
          />
          <br />
          <br />
          <label htmlFor="login-password">Password </label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            id="login-password"
            placeholder="Enter Password"
            className="form-control"
          />
          <br />
          <br />
          <button
            className="btn btn-outline-dark"
            onClick={this.login}
            type="submit"
          >
            Login
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={this.signup}
            type="button"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
