import React from "react";
import Links from "./links";
//import LoginForm from "./login-form"
import PostDish from "./post-dish"
import HomeContent from "./home-content"
import { connect } from "react-redux";
//import * as actions from "../actions";
import "./home.css";
import { Redirect } from 'react-router-dom'

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing"
    };
  }

  getStarted = () => {
    console.log("get started button clicked!");
    this.setState({
      display: "get started"
    }); 
    //this.props.dispatch(actions.setDisplay("get started"));
    //this.props.dispatch(actions.setDisplay("login"));
  };
  getStartedTwo = () => {
    console.log("get started button clicked!");
    this.setState({
      display: "post dish"
    });
  };

  componentDidMount = () => {
      if (localStorage.getItem("isAuthenticated")){
       this.setState({
            display: "secured landing"
        }); 
        //this.props.dispatch(actions.setDisplay("secured landing"));
      }
      /*else{
        //this.props.dispatch(actions.setDisplay("landing"))
        this.setState({ 
            display: "login"
        }); */
      //} 
    }
  
 
//onClick={this.getStarted}
  render = () => {
    console.log(this.props.state);
    console.log(this.state);
    if (this.state.display === "landing") {
      return (
        <HomeContent onClick={this.getStarted}/>
      );
    }
    if (this.state.display === "get started") {
      return <Redirect to='/login'/>
    }
     if (this.state.display === "secured landing"){
      return(
      <div>
      <Links/>
      <HomeContent onClick={this.getStartedTwo}/>
      </div>)
    }//if
    if (this.state.display === "post dish") {
      return <PostDish />;
    }
    //if (this.state.display === "login") return <Redirect to='/login'/>
   
  };
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Home);