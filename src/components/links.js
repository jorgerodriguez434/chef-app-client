import React from "react";
import { Link } from "react-router-dom";

export default class Links extends React.Component {
  render() {
    return (
      <div>
        <section className="link-group">
          <Link className="link " to="/login">
            Log in
          </Link>
          <Link className="link " to="/home">
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
        </section>
      </div>
    );
  }
}
