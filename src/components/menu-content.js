import React from "react";
import { connect } from "react-redux";

export class MenuContnet extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing"
    };
  }

  render = () => {
    if (this.state.display === "landing") {
      return (
        <div className="">
          <Links />
          <div className="intro-image">
            <h1> MENU </h1>
          </div>
          <section className="background-for-button-group">
            <div className="button-group-container">
              <ButtonGroup
                displayNoEgg={this.props.displayNoEgg}
                displayVegan={this.props.displayVegan}
                displayNoDairy={this.props.displayNoDairy}
                displayNoMeat={this.props.displayNoMeat}
                displayMeat={this.props.displayMeat}
                displayNoGluten={this.props.displayNoGluten}
              />
            </div>
          </section>
        </div>
      );
    } 
  }; 
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(MenuContent);
