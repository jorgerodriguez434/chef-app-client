import React from "react";
import * as config from "../config";
import LoginForm from "./login-form"

export default class RegistrationForm extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      username: "",
      password: "",
      display: "register"
    }
    this._nameRef = React.createRef();
    this._lastNameRef = React.createRef();
    this._usernameRef = React.createRef();
    this._passwordRef = React.createRef();
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
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  onSubmit = e => {
    e.preventDefault();
    const username = this._usernameRef.current.value;
    const password = this._passwordRef.current.value;
    const name = this._nameRef.current.value;
    const lastName = this._lastNameRef.current.value;

    this.setState({
      username,
      password,
      name,
      lastName
    });
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
        <form onSubmit={this.testing}>
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
          />

          <button
            className="general-button"
            type="button"
            onClick={this.onSubmit}
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
   else if (this.state.display === "login") return <LoginForm/>
  };
}
