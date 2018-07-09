import React from "react";
import Links from "./links";
import {connect} from "react-redux";
import LoginForm from "./login-form"


export class DashBoard extends React.Component {
    constructor(){
      super();
      this.state = {
        display: "landing"
      }
    }

  componentDidMount = () => {
    if (!localStorage.getItem("isAuthenticated")){
      this.setState({
          display: "login"
      });
    }
} 

  render() {
    if (this.state.display === "landing") {
    return (
      <div>
        <Links/>
        <h1> Under Construction!  </h1>
        <p> This is the dashboard! </p>
        <h2> Profile </h2>
      </div>
    );
  }//if
  else if (this.state.display === "login") return <LoginForm/>
  }
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(DashBoard);