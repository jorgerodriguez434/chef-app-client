import React from "react";
//import * as config from "../config";
import { Redirect } from "react-router-dom";
import { RingLoader } from "react-spinners";
import "./registration.css";

export default class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      username: "",
      password: "",
      display: "register",
      message: null,
      isPending: false
    };
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
    };
    fetch('https://thawing-ravine-79238.herokuapp.com/api/users', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error:", error);
      })
      .then(response => {
        console.log("Success:", response);
        if (response.reason === "ValidationError") {
          this.setState({
            message: response.message,
            isPending: false
          });
          setTimeout(() => {
            this.setState({
              message: ""
            });
          }, 1500);
          return false;
        } else {
          this.setState({
            display: "Success!",
            isPending: false
          });
        }
      });
  };

  setMessageToNull = () => {
    setTimeout(() => {
      this.setState({
        message: null
      });
    }, 1500);
  };

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
    this.setState({
      isPending: true
    });

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1000);
    });

    const anotherPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1500);
    });

    promise.then(() => {
      if (password !== confirmPassword) {
        anotherPromise
          .then(() => {
            console.log("another promise");
            this.setState({
              message: "Passwords must match!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      } 
      else if (password.length < 10) {
        anotherPromise
          .then(() => {
            console.log("another promise");
            this.setState({
              message: "Password must be at least 10 characters long!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);

        return false;
      } 
      else{
          promise.then(this.postRequest);
      }
    }); 

     
  };

  goback = () => {
    this.setState({
      display: "login"
    });
  };

  goToLogin = () => {
    this.setState({
      display: "login"
    });
  };

  render = () => {
    console.log(this.state);
    if (this.state.display === "register") {
      return (
      <section className="registration-outside-container" aria-live="polite"> 
        <div className="registration-container">
          <h1> Register </h1>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              ref={this._nameRef}
              className="input my-text"
              required
            />
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
        <div className="spinner-container">
            <div className="spinner">
              <RingLoader color={"#123abc"} loading={this.state.isPending} />
            </div>
        </div>
            <button className="general-button" type="submit">
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
      </section>
      );
    } //if
    else if (this.state.display === "login") return <Redirect to="/login" />;
    else if (this.state.display === "Success!") {
      return (
      <section className="success-register-outside-container" aria-live="polite">
        <div className="success-register-container ">
          <h1> Success! </h1>
          <p> You can now log in!</p>

          <button className="general-button" onClick={this.goToLogin}>
            {" "}
            Go to Login{" "}
          </button>
        </div>
        </section>
      );
    }
  };
}
