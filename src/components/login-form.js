import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import * as config from "../config";
import * as actions from "../actions";
import "./login-form.css"
import { RingLoader } from 'react-spinners';

export class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = { display: "login", username:"", password:"" };
    this._usernameRef = React.createRef();
    this._passwordRef = React.createRef();
  }

  componentDidMount = () => {
    //this.props.state.dispatch(actions.setDisplay("login"));
    /*this.setState({
      display: "landing"
    }); */
    console.log("login form mounted");
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
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(token => {
  
      localStorage.setItem('token', token);
      console.log('Success:', token);
      this.props.dispatch(actions.setToken(token));
      if (token === undefined){
        this.props.dispatch(actions.setLoginFailed());
        return false;
        
      }
      else{
        this.props.dispatch(actions.setLoginSuccess());
        localStorage.setItem('isAuthenticated', true);
        if (localStorage.getItem("isAuthenticated")){
          this.setState({
            display: "post dish"
          }); 
          //this.props.dispatch(actions.setDisplay("landing"));
        }
      }
    });
  }

  onSubmit = e => {
    console.log("login button clicked!")
    e.preventDefault();
    const username = this._usernameRef.current.value;
    const password = this._passwordRef.current.value;

    this.setState({
      username,
      password,
    });
    this.props.dispatch(actions.requestLogin());
    this.props.dispatch(actions.setUsername(username));
    localStorage.setItem('username', username);
    setTimeout(this.postRequest, 3000);
  }

  register = () => {
    console.log("register button clicked!");
    this.setState({
      display: "register"
    });
    //this.props.dispatch(actions.setDisplay("register"));
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    if (this.state.display === "login") {
      return (
      <Fragment>
      <section className="custom-outside-container">
        <div className="custom-container">
        <p> (To demo app, sign in with username: testing1234, password: testing1234) </p>
          <h1> Sign in </h1>
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
            <div className="spinner-container">
          <div className="spinner">
            <RingLoader
          color={'#123abc'} 
          loading={this.props.state.isPending}
          
        />
        </div>
      </div>
      <h3>
              {this.props.state.error ? this.props.state.error.message : null}
            </h3>
            <button className="login-button" type="submit">
              Login
            </button>
            {/*<h2>{this.props.state.isPending ? "Logging in..." : null}</h2> */}
        
          
            <button
              className="general-button"
              type="button"
              onClick={this.register}
            >
              Register
            </button>
          </form>
        </div>
        </section>
        </Fragment>
      );
    }//if
    else if (this.state.display === "post dish") {
      return <Redirect to='/post-dish'/>
    } 
    else if(this.state.display === "register") {
      return (
        <Redirect to='/register'/>
      );
    }
  }
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(LoginForm);