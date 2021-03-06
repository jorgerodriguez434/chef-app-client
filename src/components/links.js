import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./links.css";
import { Redirect } from "react-router-dom";

export class Links extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Log out",
      display: "landing",
      isPending: false
    };
  }

  logout = () => {
    // console.log("logout button clicked!");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    this.setState({
      name: "Logged out!",
      display: "login",
      isPending: false
    });
    this.props.dispatch(actions.setLogOut());
  };

  wait = () => {
    this.setState({
      name: "Logging out...",
      isPending: true
    });
    setTimeout(this.logout, 1000);
  };

  onClick = () => {
    // console.log("clicked!");
    this.props.dispatch(actions.setDisplay("landing"));
  };
  render() {
    if (this.state.display === "landing") {
      return (
        <div className="outside-link-group-container">
          <section className="link-group">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/menu" onClick={this.onClick}>
              Menu
            </Link>
            <Link className="link" to="/post-dish" onClick={this.onClick}>
              Post Dish
            </Link>

            <div className="logout-div">
              <button className="logout" onClick={this.wait}>
                {" "}
                {this.state.name}
              </button>
            </div>
          </section>
        </div>
      );
    }

    if (this.state.display === "login") {
      return <Redirect to="/login" />;
    }
  }
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Links);
