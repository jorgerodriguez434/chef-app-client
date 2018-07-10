import React from "react";
import Links from "./links";
import {connect} from "react-redux";
import LoginForm from "./login-form"
import * as actions from "../actions";
import "./dashboard.css"
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
      
    <div className="dashboard-outside-container">
      <div className="dashboard-container"> 
        <p> This is your dashboard! </p>
        <h2> Profile </h2>
        <div className="profile-pic">
         <h3> No profile pic </h3>
         </div>
      </div>
    </div>
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