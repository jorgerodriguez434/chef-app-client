import React from "react";
//import DashBoard from "./dashboard";

import { connect } from "react-redux";
import PostDish from "./post-dish";

export class LoginForm extends React.Component {
  constructor() {
    super();
    this._usernameRef = React.createRef();
    this._passwordRef = React.createRef();
    this.state = { loggedIn: false };
  }

  isValidated = (username, password) => {
    if (username === "a" && password === "a") {
      console.log("SUCCESS!");
      return true;
    } else {
      return false;
    }
  };

  testing = e => {
    e.preventDefault();
    const username = this._usernameRef.current.value;
    const password = this._passwordRef.current.value;
    if (this.isValidated(username, password)) {
      //this.props.dispatch(actions.setLoginSuccess(true));
      this.setState({ loggedIn: true });
    } else {
      //this.props.dispatch(actions.setLoginError("there was an error"));
      this.setState({ loggedIn: false });
    }
  };

  render() {
    console.log(this.state);
    if (this.state.loggedIn) {
      return <PostDish />;
    } else {
      return (
        <div>
          <h1> Welcome! </h1>
          <form onSubmit={this.testing}>
            <label htmlFor="username">Username</label>
            <input type="text" ref={this._usernameRef} className="input my-text" />
            <label htmlFor="password">Password</label>
            <input type="password" ref={this._passwordRef} className="input my-text" />
            <button className="login-button" type="submit">Login</button>
          </form>
          <h2> {this.props.username}</h2>
          <h2> {this.props.password}</h2>
          <h3> Incorrect username or password! </h3>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  error: state.error
});

export default connect(mapStateToProps)(LoginForm);
