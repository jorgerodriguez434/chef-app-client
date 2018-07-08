import React from "react";
import Header from "./header";
import LoginForm from "./login-form"
import "./home.css";

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
    });
  };

  render = () => {
    if (this.state.display === "landing") {
      return (
        <section>
          <Header onClick={this.getStarted} />
          <div className="body-for-landing-page">
            <div className="main-content">
              <div className="intro-paragraph">
                <h2> THE DESIRED CHEF APP</h2>
                <p>
                  {" "}
                  A guest comes into your restaurant and asks what is dairy
                  free. On top of that he/she is allergic to gluten, and he/she does not
                  eat meat. How fast can you meat the guest's request ? At this time
                  you have too much going on to remember every single dish by
                  memory, so you go into your recipe book, but that is taking
                  too long. You wish you had a button that would just tell
                  you! This app is that button you need! You can categorize your
                  dishes by 5 categories: gluten free, vegeterian, vegan, dairy
                  free, and meats! More categories soon to come!
                </p>
              </div>
              <div className="image-container">
                <img
                  src="https://static1.squarespace.com/static/58b47c8b59cc68eea9efaf22/58b601d31b10e3106109a12d/58b6026d44024365b09f97cd/1488323183469/IMG_5157.jpg?format=1500w"
                  className="landing-image"
                  alt="dish"
                />
                <img
                  src="https://static1.squarespace.com/static/58b47c8b59cc68eea9efaf22/58b601d31b10e3106109a12d/58b601d39f7456f72ba4079e/1488323029411/IMG_4739.jpg?format=1500w"
                  className="landing-image"
                  alt="dish"
                />
                <img
                  src="https://static1.squarespace.com/static/58b47c8b59cc68eea9efaf22/58b601d31b10e3106109a12d/58b601e3be65948b074fce8a/1488323149760/IMG_4508.jpg?format=1500w"
                  className="landing-image"
                  alt="dish"
                />
              </div>
            </div>
          </div>
        </section>
      );
    }
    if (this.state.display === "get started") {
      return <LoginForm />;
    }
  };
}
