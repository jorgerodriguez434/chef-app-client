import React from "react";
import Links from "./links";
import PostDish from "./post-dish"
import HomeContent from "./home-content"
import { connect } from "react-redux";
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
    // console.log("get started button clicked!");
    this.setState({
      display: "get started"
    }); 
  };
  getStartedTwo = () => {
    // console.log("get started button clicked!");
    this.setState({
      display: "post dish"
    });
  };

  componentDidMount = () => {
      if (localStorage.getItem("isAuthenticated")){
       this.setState({
            display: "secured landing"
        }); 
      }
     
    }
  
 

  render = () => {
    // console.log(this.props.state);
    // console.log(this.state);
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
   
  };
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Home);