import React from "react";
import Links from "./links";
import LoginForm from "./login-form"
import PostDish from "./post-dish"
import HomeContent from "./home-content"
import { connect } from "react-redux";
import * as actions from "../actions";
import "./home.css";

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing"
    };
  }

  getStarted = () => {
    console.log("get started button clicked!");
    /*this.setState({
      display: "get started"
    }); */
    this.props.dispatch(actions.setDisplay("get started"));
  };
  getStartedTwo = () => {
    console.log("get started button clicked!");
    /*this.setState({
      display: "post dish"
    }); */
    this.props.dispatch(actions.setDisplay("post dish"));
  };

  componentDidMount = () => {
      if (localStorage.getItem("isAuthenticated")){
        /*this.setState({
            display: "secured landing"
        }); */
        this.props.dispatch(actions.setDisplay("secured landing"));
      }
  } 
 
  setSecuredLanding = () => {
      /*this.setState({
          display: "secured landing"
      });*/
      this.props.dispatch(actions.setDisplay("secured landing"));
  }
//onClick={this.getStarted}
  render = () => {
    console.log(this.props);
    //console.log(this.state);
    if (this.props.state.display === "landing") {
      return (
        <HomeContent onClick={this.getStarted}/>
      );
    }
    if (this.props.state.display  === "get started") {
      return <LoginForm />;
    }
     if (this.props.state.display  === "secured landing"){
      return(
      <div>
      <Links/>
      <HomeContent onClick={this.getStartedTwo}/>
      </div>)
    }//if
    if (this.props.state.display  === "post dish") {
      return <PostDish />;
    }
    if (this.props.state.display === "login") {
      return <LoginForm />;
    }
  };
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Home);