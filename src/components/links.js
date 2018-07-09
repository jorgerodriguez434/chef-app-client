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
        name: "foo"
    });
    //this.props.dispatch(actions.update('POST A DISH'));
    this.props.dispatch(actions.setDisplay("login"));
  };

  wait = () => {
    setTimeout(this.logout, 2000);
  } 
  render() {
  
      return (
        <div>
          <section className="link-group">
            <Link className="link " to="/">
              Home
            </Link>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="link" to="/menu">
              Menu
            </Link>
            <Link className="link" to="/seating">
              Seating
            </Link>
            <Link className="link" to="/post-dish">
              Post Dish
            </Link>
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
