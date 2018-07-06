import React from "react";
import { connect } from "react-redux";
import Home from "./home";
import RegistrationForm from "./registration-form";
import * as config from "../config";
import * as actions from "../actions";

export class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = { loggedIn: false, display: "sign in", username:"", password:"" };
    this._usernameRef = React.createRef();
    this._passwordRef = React.createRef();
  }


  postRequest = () => {
    const data = {
      username: this.state.username,
      password: this.state.password
    }
    fetch(config.API_AUTH_LOGIN_URL, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(token => {
      //localStorage.setItem
      //get token back here
      console.log('Success:', token);
      this.props.dispatch(actions.setToken(token));
      if (token === undefined){
        return false
      }
      else{
        this.setState({
          loggedIn: true,
          display: "home"
        });
      }
    });
  }

  
  
isValidated = () => {
    //check and verify the token
    //i might have to dispatch the token so that I can get it, right?
    if (this.props.token === "undefined"){
      return false
    }
    else {
      this.setState({
        loggedIn: true,
        display: "home"
      });
    }
  }

  /*testing = e => {
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
*/

  onSubmit = e => {
    console.log("login button clicked!")
    e.preventDefault();
    const username = this._usernameRef.current.value;
    const password = this._passwordRef.current.value;

    this.setState({
      username,
      password,
    });
    setTimeout(this.postRequest, 1000);
  }

  register = () => {
    console.log("register button clicked!");
    this.setState({
      display: "register"
    });
  };

  render() {
    console.log(this.state);
    //console.log(this.props);
    if (this.state.display === "sign in") {
      return (
        <div>
          <h1> Welcome! </h1>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              ref={this._usernameRef}
              className="input my-text"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              ref={this._passwordRef}
              className="input my-text"
              required
            />
            <button className="login-button" type="submit">
              Login
            </button>
            <button
              className="register-button"
              type="button"
              onClick={this.register}
            >
              Register
            </button>
          </form>
        </div>
      );
    }//if
    else if (this.state.loggedIn) {
      return <Home />;
    } 
    else if(this.state.display === "register") {
      return (
        <RegistrationForm/>
      );
    }
  }
}

export const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  error: state.error,
  token: state.token
});

export default connect(mapStateToProps)(LoginForm);

/*
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
*/

/*

this.setState({
            loggedIn: true,
            display: "home"
          });
*/
