import React from "react";
import * as config from "../config";
//import LoginForm from "./login-form"
import { Redirect } from 'react-router-dom'

export default class RegistrationForm extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      username: "",
      password: "",
      display: "register",
      message: null
    }
    this._nameRef = React.createRef();
    this._lastNameRef = React.createRef();
    this._usernameRef = React.createRef();
    this._passwordRef = React.createRef();
    this._confirmPasseword = React.createRef();
  }

  postRequest = () => {
    
    const data = {
      name: this.state.name,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    }
    fetch(config.API_USERS_URL, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error);

    })
    .then(response => {
      console.log('Success:', response);
      if (response.reason === "ValidationError"){
        this.setState({
          message: "Username already taken!"
      });
      }
      else {
      this.setState({
          display: "login"
      });
    }
    });
  }
  onSubmit = e => {
    e.preventDefault();
    const username = this._usernameRef.current.value;
    const password = this._passwordRef.current.value;
    const name = this._nameRef.current.value;
    const lastName = this._lastNameRef.current.value;
    const confirmPassword = this._confirmPasseword.current.value;

    this.setState({
      username,
      password,
      name,
      lastName,
      confirmPassword
    });
    //if 

    if (password !== confirmPassword){
        this.setState({
          message: "Passwords must match!"
        });
        setTimeout( () => {
          this.setState({
            message: ""
          })}, 1500); 
        return false;
    }
    else if(password.length < 10){
      this.setState({
        message: "Password must be at least 10 characters long!"
      });
      setTimeout( () => {
        this.setState({
          message: ""
        })}, 1500); 
      return false;
    }

    setTimeout(this.postRequest, 1000); 

  }

  goback = () => {
    this.setState({
        display: "login"
    });
  }

  render = () => {
    console.log(this.state);
   if (this.state.display === "register"){
    return (
      <div>
        <h1> Register </h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" ref={this._nameRef} className="input my-text" required/>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            ref={this._lastNameRef}
            className="input my-text"
            required
          />

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
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            ref={this._confirmPasseword}
            className="input my-text"
            required
          />
          <p>{this.state.message}</p>
          <button
            className="general-button"
            type="submit"
          >
            REGISTER
          </button>
          <button
            className="general-button"
            type="button"
            onClick={this.goback}
          >
            GO BACK
          </button>
        </form>
      </div>
    );
   }//if
   else if (this.state.display === "login") return <Redirect to='/login'/>
  };
}
