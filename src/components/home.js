import React from "react";
import Header from "./header";
import PostDish from "./post-dish";

export default class Home extends React.Component {
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
    })
  };

  render = () => {
    if (this.state.display === "landing") {
      return <Header onClick={this.getStarted} />;
    }
    if (this.state.display === "get started"){
      return <PostDish />;
    }
  };
}
