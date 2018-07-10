import React from "react";
import Links from "./links";
import {connect} from "react-redux";
import LoginForm from "./login-form"
import * as actions from "../actions";

export class DashBoard extends React.Component {
    constructor(){
      super();
      this.state = {
        display: "landing"
      }
    }

  componentDidMount = () => {
    if (localStorage.getItem("isAuthenticated")){
      this.props.dispatch(actions.setDisplay("landing"));
    }
    else {
      this.props.dispatch(actions.setDisplay("login"));
    }
} 

  render() {
    if (this.props.state.display === "landing") {
    return (
      <div>
        <Links/>
        <h1> Welcome, {localStorage.getItem("username")}!  </h1>
        <p> This is the dashboard! </p>
        <h2> Profile </h2>
      </div>
    );
  }//if
  else if (this.props.state.display === "login") return <LoginForm/>
  }
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(DashBoard);