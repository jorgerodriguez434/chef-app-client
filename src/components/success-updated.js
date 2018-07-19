import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./success-updated.css";

export class SuccessUpdated extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "success"
    };
  }

  goBack = () => {
    this.setState({
      display: "menu"
    });
  };

  render = () => {
    if (this.state.display === "success") {
      return (
        <section
          className="success-updated-outside-container"
          aria-live="polite"
        >
          <div className="success-updated-container">
            <h1> Success! </h1>
            <h2>Your dish has been updated! </h2>
            <button className="button" onClick={this.goBack}>
              {" "}
              GO TO MENU{" "}
            </button>
          </div>
        </section>
      );
    } else if (this.state.display === "menu") return <Redirect to="/menu" />;
  };
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(SuccessUpdated);
