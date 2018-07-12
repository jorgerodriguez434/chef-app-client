import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";


export class Links extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "Log out"
        }
    }

    
  logout = () => {
    console.log("logout button clicked!");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    this.setState({
        name: "Logged out!"
    });
    this.props.dispatch(actions.setDisplay("login"));
    this.props.dispatch(actions.setLogOut());
  };

  wait = () => {
    setTimeout(this.logout, 1000);
  } 

  onClick = () => {
      console.log("clicked!");
      this.props.dispatch(actions.setDisplay("landing"));
  }
  /*dashboard = () => {
    console.log("dashboard clicked!");
    this.props.dispatch(actions.setDisplay("dashboard"));
}*/
  render() {
  
      return (
        <div>
          <section className="link-group">
            <Link className="link " to="/">
              Home
            </Link>
            <Link className="link" to="/dashboard" onClick={this.onClick}>
              Dashboard
            </Link>
            <Link className="link" to="/menu" onClick={this.onClick}>
              Menu
            </Link>
            <Link className="link" to="/seating" onClick={this.onClick}>
              Seating
            </Link>
            <Link className="link" to="/post-dish" onClick={this.onClick}>
              Post Dish
            </Link>
          <div className="username">
            {localStorage.getItem("username")}
      </div> 
            <button className="logout" onClick={this.wait}>
              {" "}
              {this.state.name}
            </button>
          </section>
        </div>
      );
  }
}

export const mapStateToProps = state => ({
    state
  });
  
  export default connect(mapStateToProps)(Links);